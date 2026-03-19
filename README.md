# 🌍 OncologyAtlas

> Interactive global cancer data — 195 countries, 18 WHO metrics, open source.

**Live map:** https://notageek88.github.io/oncology-atlas/

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Data: WHO GHO](https://img.shields.io/badge/data-WHO%20GHO-green.svg)](https://www.who.int/data/gho)
[![Countries](https://img.shields.io/badge/countries-195-orange.svg)](docs/data/countries_cancer.csv)

---

## What is this?

OncologyAtlas is an open-source interactive map of global cancer burden data. Built for researchers, journalists, and curious people who want to explore how cancer affects different countries.

**No paywalls. No logins. All data is free and open.**

## Features

- **Choropleth map** — D3.js Natural Earth projection (like NYT/Guardian)
- **18 metrics** across 3 categories:
  - Cancer mortality rates (5 cancer types, per 100k)
  - Disease burden — DALYs (5 cancer types, per 100k)
  - Healthcare infrastructure (surgery, registry, screening, plan)
- **Country profiles** — click any country for full breakdown with bar charts
- **Compare mode** — select up to 4 countries for side-by-side comparison
- **Downloadable CSV** — `docs/data/countries_cancer.csv`

## Data Sources

| Source | What | Coverage |
|--------|------|----------|
| [WHO GHO](https://ghoapi.azureedge.net/api) | Cancer mortality, DALYs, infrastructure | 194 countries, 2019–2022 |
| [ISO 3166](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes) | Country code mapping | 249 countries |

### Metrics included

**Mortality (age-standardized death rate / 100k):**
- All cancers combined (`SA_0000001807`)
- Breast cancer (`SA_0000001438`)
- Colorectal cancer (`SA_0000001439`)
- Liver cancer (`SA_0000001445`)
- Mouth & oropharynx (`SA_0000001448`)
- Oesophagus cancer (`SA_0000001449`)

**Disease Burden — DALYs / 100k:**
- Breast cancer (`SA_0000001419`)
- Colorectal cancer (`SA_0000001420`)
- Liver cancer (`SA_0000001426`)
- Mouth & oropharynx (`SA_0000001429`)
- Oesophagus cancer (`SA_0000001430`)

**Healthcare Infrastructure:**
- Cancer surgery in public sector (`NCD_CCS_cancer_surgery`)
- Population-based cancer registry (`NCD_CCS_CancerRegNational`)
- National cancer action plan (`NCD_CCS_CancerPlan`)
- Breast cancer screening program (`NCD_CCS_breastcancerscreening`)
- Cancer department at tertiary level (`NCD_CCS_CANCER_DEPT`)

## Download Data

```
docs/data/countries_cancer.json  — full dataset (JSON)
docs/data/countries_cancer.csv   — spreadsheet-ready (CSV)
```

## Tech Stack

- **Frontend:** D3.js v7 + TopoJSON (no framework, no build step)
- **Map data:** world-atlas@2 (Natural Earth 110m)
- **Pipeline:** Python 3 (see `backend/app/who_pipeline.py`)
- **Hosting:** GitHub Pages (`/docs` branch)

## Run locally

```bash
git clone https://github.com/notageek88/oncology-atlas
cd oncology-atlas/docs
python3 -m http.server 8080
# open http://localhost:8080
```

## Refresh data

```bash
pip install requests
python3 backend/app/who_pipeline.py
```

## Roadmap

- [ ] SEER data — US state-level (50 states, 50 years)
- [ ] Trend charts — show change over time per country
- [ ] Search bar — find country by name
- [ ] Embed widget — `<iframe>` for journalists/researchers
- [ ] API endpoint — `/api/cancer?country=RUS&type=breast`
- [ ] Cervical cancer screening coverage (%)
- [ ] Alcohol-attributable cancer deaths

## Contributing

PRs welcome. Data corrections, new metrics, UI improvements — all good.

## License

MIT — use freely, attribution appreciated.

**Data:** WHO Global Health Observatory, public domain.
