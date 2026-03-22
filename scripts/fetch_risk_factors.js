/**
 * Fetches Risk Factor data from WHO GHO API
 * smoking, obesity, alcohol, air pollution, UHC index
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const EXTRA_PATH = path.join(__dirname, '../docs/data/extra_metrics.json');
const extra = JSON.parse(fs.readFileSync(EXTRA_PATH, 'utf8'));

function fetchGHO(indicator) {
    return new Promise((res, rej) => {
        const url = `https://ghoapi.azureedge.net/api/${indicator}?$filter=SpatialDimType eq 'COUNTRY'&$select=SpatialDim,NumericValue,TimeDim,Dim1&$orderby=TimeDim desc`;
        https.get(url, { timeout: 15000 }, r => {
            let d = '';
            r.on('data', c => d += c);
            r.on('end', () => {
                try { res(JSON.parse(d).value || []); }
                catch(e) { rej(e); }
            });
        }).on('error', rej).on('timeout', () => rej(new Error('timeout')));
    });
}

function latestByCountry(records, sexFilter) {
    const map = {};
    for (const r of records) {
        const iso = r.SpatialDim;
        const year = r.TimeDim;
        const val = r.NumericValue;
        const sex = r.Dim1;
        if (!iso || val == null) continue;
        if (sexFilter && sex && sex !== sexFilter) continue;
        if (!map[iso] || year > map[iso].year) {
            map[iso] = { val: parseFloat(val.toFixed(2)), year };
        }
    }
    return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, v.val]));
}

async function main() {
    const INDICATORS = [
        // [gho_code, metric_key, sex_filter, label]
        ['M_Est_smk_curr_std',  'smoking_prev',    'SEX_BTSX', 'Smoking prevalence % (both sexes, age-std)'],
        ['NCD_BMI_30C',         'obesity_prev',    'SEX_BTSX', 'Obesity % (BMI>=30, age-std)'],
        ['SA_0000001462',       'alcohol_pc',      null,       'Alcohol consumption litres/capita'],
        ['SDGAIRBOD',           'pm25_pollution',  null,       'Ambient PM2.5 μg/m³'],
        ['UHC_INDEX_REPORTED',  'uhc_index',       null,       'UHC Service Coverage Index (0-100)'],
    ];

    for (const [code, key, sex, label] of INDICATORS) {
        console.log(`Fetching: ${label} (${code})...`);
        try {
            const records = await fetchGHO(code);
            const byCountry = latestByCountry(records, sex);
            extra[key] = byCountry;
            const n = Object.keys(byCountry).length;
            const vals = Object.values(byCountry);
            const mean = (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1);
            console.log(`  ✓ ${n} countries, mean: ${mean}`);
        } catch(e) {
            console.log(`  ✗ Error: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 300)); // rate limit
    }

    fs.writeFileSync(EXTRA_PATH, JSON.stringify(extra, null, 2));
    console.log('\n✓ Saved to extra_metrics.json');
    console.log('Keys:', Object.keys(extra).join(', '));
}

main().catch(console.error);
