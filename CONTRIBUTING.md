# Contributing to OncologyAtlas

Thanks for helping make cancer data more accessible. Here's how to contribute.

## Easiest contributions (no code required)

### Fix a data error
Open an issue: "Wrong data for [country]" with a link to the correct source (WHO GHO, GLOBOCAN, EUROCARE).

### Add a clinic
Edit `docs/data/clinics.json` — copy an existing entry and fill in:
- `name`, `country`, `city`, `lat`, `lon`
- `category`: `standard` | `integrative` | `experimental` | `controversial`
- `tier`: `flagship` | `top` | `standard`
- `accreditation`, `founded`, `beds` (optional)
- `url` (official website)

### Add or fix a translation
Edit `docs/data/i18n.json` — find the language code (en/ru/zh/es/ar/hi/pt/fr/de/ja/id) and add/fix the key.

### Report outdated data
WHO GHO publishes with a 3-4 year lag. If you have a newer verified source, open an issue with the source URL and year.

---

## Code contributions

### Setup
```bash
git clone https://github.com/notageek88/oncology-atlas
cd oncology-atlas/docs
python3 -m http.server 8080
# open http://localhost:8080
```

### Where things live
```
docs/index.html              — single-file app (HTML + CSS + JS)
docs/data/countries_cancer.json  — main dataset (165 countries, 18 metrics)
docs/data/i18n.json          — all UI translations (11 languages)
docs/data/clinics.json       — oncology clinics (329 clinics, 49 countries)
docs/data/clinical_trials.json   — ClinicalTrials.gov data
docs/data/trends.json        — NCD mortality time series 2000-2021
docs/data/extra_metrics.json — cervical screening, alcohol-attributable deaths
backend/app/who_pipeline.py  — Python script to refresh WHO GHO data
```

### Guidelines
- Keep the zero-build approach (no webpack/vite/bundler) unless there's a very strong reason
- Don't add npm dependencies without discussion
- All data must come from verifiable public sources — include the source URL in PR description
- Translations: translate all keys, not just some

### Submitting a PR
1. Fork the repo
2. Create a branch: `git checkout -b fix/country-data-RUS` or `feat/add-prostate-cancer`
3. Make your changes
4. Test locally (`python3 -m http.server 8080`)
5. Open PR with description of what changed and why

---

## Data sources we accept

| Type | Accepted sources |
|------|-----------------|
| Mortality/DALYs | WHO GHO, GLOBOCAN (IARC) |
| Survival rates | EUROCARE-5, CONCORD-3, national registries |
| Clinical trials | ClinicalTrials.gov, EU Clinical Trials Register |
| Infrastructure | WHO NCD country capacity surveys |
| Clinics | Official hospital websites, JCI/Magnet accreditation lists, Newsweek rankings |

We do **not** accept data from: unofficial aggregators, Wikipedia (as primary source), or sources without methodology documentation.

---

## License

By contributing, you agree your contributions are licensed under MIT.
