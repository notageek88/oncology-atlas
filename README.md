# 🌍 OncologyAtlas

> Interactive global cancer data — 185 countries, 35+ metrics, open source.

**Live map:** https://notageek88.github.io/oncology-atlas/  
**Author:** [@mashin_aa](https://www.threads.net/@mashin_aa)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Data: WHO GHO](https://img.shields.io/badge/data-WHO%20GHO-green.svg)](https://www.who.int/data/gho)
[![Countries](https://img.shields.io/badge/countries-165-orange.svg)](docs/data/countries_cancer.csv)
[![ClinicalTrials](https://img.shields.io/badge/trials-ClinicalTrials.gov-blue.svg)](docs/data/clinical_trials.json)

---

## What is this?

OncologyAtlas is an open-source interactive map of global cancer data. Built for researchers, journalists, patients, and curious people who want to understand how cancer affects different countries — and why outcomes differ so dramatically.

**No paywalls. No logins. All data is free and open.**

---

## Features

| Feature | Description |
|---------|-------------|
| 🗺 Choropleth map | D3.js Natural Earth projection — same approach as NYT/Guardian |
| 📊 30+ metrics | Mortality, DALYs, incidence (GLOBOCAN 2022), readiness, risk factors, treatment costs, age groups |
| ⏱ Timeline 2000–2021 | NCD mortality slider — see how countries changed over 22 years |
| 🏥 Oncology clinics | 41 top clinics in 21 countries with profiles and accreditations |
| ✈ Migration flows | 37 patient migration routes with hover tooltips |
| 🔬 Clinical trials | ClinicalTrials.gov data — 46 countries, active studies by phase |
| 📈 Survival rates | 5-year survival for 5 cancer types across 26 countries (EUROCARE/CONCORD-3) |
| 📉 Trend sparklines | Per-country trend lines for 7 metrics |
| 🌐 11 languages | EN/RU/ZH/ES/AR/HI/PT/FR/DE/JA/ID — full UI + profile translation |
| ⓘ Explanations | Every metric explained in plain language with examples |
| 📚 Sources modal | All data sources documented with links and methodology |
| 🔗 Shareable URLs | `?country=RUS&lang=ru&metric=death_breast` |
| 📱 Mobile-friendly | Bottom sheet panel on mobile |
| ⬇ CSV download | Full dataset as spreadsheet |
| 🎗 Cervical screening | Coverage data for 180+ countries, overlaid on infrastructure map |
| 🍷 Risk factors | Alcohol-attributable cancer deaths layer |
| 📅 Data freshness | Every tooltip and profile shows the year of data |
| 📖 Citation generator | One-click APA citation for researchers |
| 📄 PDF Report | One-click printable country report: all metrics, survival, trials, citation |
| 💊 Treatment matrix | Surgery/chemo/radiation/targeted/immunotherapy/proton by 100+ countries |
| 📋 Embed widget | Copy `<iframe>` code for any country + metric combo for journalists |
| 📊 Scatter plot | Correlation explorer — plot any two metrics, Pearson r, trend line |
| 📸 Share card | One-click SVG infographic per country — download and share on social media |
| 📄 Compare export | Compare 2–4 countries, export as landscape PDF table |
| ✈ Medical tourism | Visa, wait time, cost estimates for 23 oncology destination countries |
| 📋 Policy timeline | 40+ WHO & national cancer policy milestones 2000–2024 per country profile |
| 🎗 Dominant cancer filter | Highlight only countries where a specific cancer is the top mortality cause |
| 🌍 Regional + income benchmarking | WHO region AND World Bank income group comparison in every country profile |
| 🔬 Researcher scatter mode | Color by region, quadrant lines, click-to-label, p-value, CSV export |
| 💰 Treatment costs layer | Est. avg. annual treatment cost for 105 countries (map + profile) |
| 👶 Age-specific rates | Pediatric (0–19) and elderly (65+) cancer incidence for 70+ countries |
| ⌨ Keyboard shortcuts | /, t, c, p, r, f, ← →, Esc, ? — power-user navigation |
| 🏆 Global rankings table | All countries ranked by any metric — searchable, sortable, click to profile |

---

## Data Sources

| Source | Metrics | Coverage |
|--------|---------|----------|
| [WHO GHO](https://ghoapi.azureedge.net/api) | Mortality, DALYs, infrastructure, NCD 30-70 | 165+ countries, 2000–2022 |
| [ClinicalTrials.gov](https://clinicaltrials.gov/api/v2/) | Active trials by country and phase | 46 countries |
| [EUROCARE-5 / CONCORD-3](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)33326-3) | 5-year survival rates | 26 countries, 5 cancer types |
| [Natural Earth / world-atlas](https://github.com/topojson/world-atlas) | Map geometries | 177 countries |

### Metrics included

**Mortality (age-standardized death rate / 100k):**
- All cancers combined
- Breast, Colorectal, Liver, Mouth/oropharynx, Oesophagus

**Disease Burden — DALYs / 100k:**
- Breast, Colorectal, Liver, Mouth/oropharynx, Oesophagus

**Healthcare Infrastructure (Yes/No):**
- Cancer surgery in public sector
- Population-based cancer registry
- National cancer action plan
- Breast cancer screening program
- Cancer department at tertiary level

---

## Roadmap

This project is actively developed. Contributions welcome for any of the items below.

> Last updated: March 2026

### ✅ v0.4–v0.9 — Core Platform (COMPLETE)
- [x] D3.js choropleth map — 185 countries, 35+ metrics, 8 categories
- [x] Cancer mortality (WHO GHO) — all cancers, breast, colorectal, liver, prostate, mouth, oesophagus
- [x] GLOBOCAN 2022 — 🫁 lung, 🟤 stomach, 🔴 cervical, ☀ melanoma, 🟡 pancreatic (age-std death rates)
- [x] Risk factors layer — 🚬 smoking, ⚖ obesity, 🍷 alcohol, 💨 PM2.5, 🏥 UHC index
- [x] Cancer incidence layer — all cancers, breast, colorectal (GLOBOCAN 2022)
- [x] Age-specific incidence — pediatric (0–19), elderly (65+)
- [x] DALYs — breast, colorectal, liver, mouth, oesophagus
- [x] Healthcare infrastructure — surgery, registry, plan, breast/cervical screening
- [x] Cancer readiness composite score (screening + registry + plan + infra)
- [x] Treatment costs map — 105 countries
- [x] 5-year survival rates — 26 countries, 5 cancer types (EUROCARE/CONCORD-3)
- [x] Clinical trials — 46 countries, phase breakdown (ClinicalTrials.gov)
- [x] NCD mortality timeline slider 2000–2021
- [x] Oncology clinics finder — 331 clinics, filter by country/specialty/tier
- [x] Patient migration flows — 37 routes with tooltips
- [x] Cancer encyclopedia — 9 cancer types (lung, stomach, cervical, breast, colorectal, liver, prostate, melanoma, pancreatic)
- [x] Scatter plot explorer — 28 metrics, Pearson r, 7 presets, detection bias notes
- [x] Correlation insights panel — 8 auto-computed r-values with interpretation
- [x] Country comparison mode — up to 4 countries, mortality + risk factors + infrastructure
- [x] PDF export — country report + comparison table
- [x] SVG infographic share card per country
- [x] Global rankings modal — all countries ranked by any metric
- [x] Prevention/readiness score with radar-style breakdown
- [x] Medical tourism guide — 23 destination countries (visa, wait, cost)
- [x] Support resources — NGOs, hotlines, 55+ countries
- [x] Policy news timeline — 40+ WHO/national events per country profile
- [x] Dominant cancer filter — highlight countries where specific cancer is #1 cause
- [x] Regional + income group benchmarking in every profile
- [x] Embed widget — `<iframe>` for journalists/researchers
- [x] Citation generator — one-click APA in every profile
- [x] 11 languages — EN/RU/ZH/ES/AR/HI/PT/FR/DE/JA/ID (full UI + profiles + metrics)
- [x] Keyboard shortcuts (/, t, c, p, r, f, ← →, Esc, ?)
- [x] Shareable URLs — `?country=RUS&lang=ru&metric=death_lung`
- [x] Mobile-friendly — bottom sheet category picker + FAB menu
- [x] Data sources modal — GLOBOCAN 2022, WHO GHO, EUROCARE, ClinicalTrials

### 🚧 v1.0 — In Progress / Next Up

- [ ] **SEER US data** — state-level cancer statistics (50 states, 50+ years)
- [ ] **Urban vs rural incidence** — GLOBOCAN sub-national data where available
- [ ] **Social media mentions layer** — Reddit/news discussion volume via GDELT
- [ ] **Public REST API** — `/api/v1/cancer?country=RUS&metric=death_lung&year=2022`
- [ ] **Alert system** — subscribe to data updates for a country (email/Telegram)
- [ ] **Cost comparison** — public vs private treatment costs per country
- [ ] **Patient stories** — qualitative layer (verified submissions)
- [ ] **Clinic "claim your profile"** — clinics submit updates via PR or form
- [ ] **More cancer types** — bladder, kidney, thyroid, NHL (GLOBOCAN 2022 data available)
- [ ] **i18n: encyclopedia articles** — translate 9 cancer encyclopedia entries into 10 languages
- [ ] **Accessibility pass** — WCAG 2.1 AA: ARIA labels, keyboard nav, contrast audit

---

## How to contribute

Ideas, data corrections, translations, UI improvements — all welcome.

```bash
git clone https://github.com/notageek88/oncology-atlas
cd oncology-atlas/docs
python3 -m http.server 8080
# open http://localhost:8080
```

**Easiest contributions:**
1. Fix a data error — open an issue with source link
2. Add a translation key to `docs/data/i18n.json`
3. Add a clinic to `docs/data/clinics.json` (with source)
4. Improve metric explanations in `METRIC_EXPLAIN` (index.html)

---

## Tech Stack

- **Frontend:** D3.js v7 + TopoJSON — no framework, no build step
- **Map data:** world-atlas@2 (Natural Earth 110m, 177 countries)
- **Data pipeline:** Python 3 (`backend/app/who_pipeline.py`)
- **Hosting:** GitHub Pages (`/docs`)

---

## Download Data

```
docs/data/countries_cancer.json    — full dataset (JSON, 165 countries, 18 metrics)
docs/data/countries_cancer.csv     — spreadsheet-ready (CSV)
docs/data/trends.json              — time series 2000–2021 (7 metrics)
docs/data/ncd_snapshots.json       — NCD mortality by year for timeline
docs/data/clinical_trials.json     — ClinicalTrials.gov aggregated by country
docs/data/clinics.json             — oncology clinics data
```

---

## License

MIT — use freely, attribution appreciated.

**Data:** WHO Global Health Observatory (public domain), ClinicalTrials.gov (public domain), EUROCARE-5/CONCORD-3 (academic public summary data).
