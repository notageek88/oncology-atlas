# 🌍 OncologyAtlas

> Interactive global cancer data — 165 countries, 18 WHO metrics, open source.

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
| 📊 22+ metrics | Mortality, DALYs, incidence (GLOBOCAN 2022), readiness, risk factors |
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

### v0.4 — Filters & Discovery
- [x] **Filter by cancer type on map** — show only countries where a specific cancer type is dominant
- [x] **Search by metric range** — range slider in filter panel (≥ threshold)
- [x] **Country comparison export** — compare 2–4 countries, export as PDF table
- [x] **Cervical cancer screening coverage** — 180+ countries, on infra map layer
- [x] **Prostate cancer data** — mortality added to profile panel and scatter axes

### v0.5 — Deeper Data
- [ ] **SEER data** — US state-level cancer statistics (50 states, 50+ years)
- [x] **Alcohol-attributable cancer deaths** — risk factors map layer
- [ ] **Tobacco-attributable cancer deaths**
- [ ] **Cancer treatment costs by country** — affordability layer
- [ ] **Age-specific rates** — pediatric vs adult vs elderly breakdown
- [ ] **Urban vs rural incidence** where available (GLOBOCAN sub-national)

### v0.6 — Social & Media Intelligence
- [ ] **Social media mentions layer** — Reddit/Twitter/news discussion volume per country, mapped via GDELT or Pushshift
- [x] **Research activity index** — PubMed publication count by country, overlaid on map
- [x] **NGO presence** — cancer helplines, NGOs, gov resources for 55+ countries in profile panel
- [x] **News timeline** — 40+ key policy events (WHO FCTC, cancer moonshots, screening launches) per country profile

### v0.7 — Access & API
- [x] **Embed widget** — `<iframe src="https://notageek88.github.io/oncology-atlas/index.html?embed=1&country=RUS&metric=death_breast">` for journalists/researchers
- [ ] **Public API** — `/api/v1/cancer?country=RUS&metric=death_breast&year=2019`
- [x] **Data freshness indicator** — every tooltip and profile panel shows data year
- [ ] **Alert/notification system** — subscribe to data updates for a country
- [x] **Citation generator** — one-click APA citation in every country profile

### v0.8 — Patient & Clinic Value
- [x] **Treatment availability matrix** — surgery/chemo/radiation/immunotherapy/proton by country (100+ countries, WHO/IAEA 2023)
- [ ] **Cost comparison** — average cancer treatment costs (public vs private) per country
- [x] **"Find a clinic" search** — filter by country, specialty, accreditation, tier (331 clinics)
- [x] **Medical tourism guide** — visa requirements, wait times, cost estimates for 23 destination countries
- [x] **Support resources** — hotlines, NGOs, patient groups per country (30+ countries)

### v0.9 — Research Tools
- [x] **Scatter plot mode** — plot any two metrics against each other, all countries (Pearson r, trend line)
- [x] **Country report PDF** — auto-generated print-ready report: mortality, DALYs, infrastructure, survival, treatments, APA citation
- [x] **Prevention score** — composite index: screening + infrastructure + registry + national plan
- [x] **Benchmarking tool** — compare country vs peer group (by GDP, region, population)
- [x] **Correlation insights** — auto-generated "Countries with X have Y% lower Z" cards
- [x] **Downloadable infographics** — one-click SVG card per country for social media sharing

### v1.0 — Platform
- [x] **User contributions** — CONTRIBUTING.md + PR templates + issue templates
- [ ] **Patient stories** — qualitative layer on top of quantitative data
- [ ] **Researcher mode** — advanced filters, multi-metric scatter plots, regression lines
- [ ] **Clinic "claim your profile"** — clinics can submit updates via PR
- [ ] **Public JSON API** — `/api/v1/cancer?country=RUS&metric=death_breast` (FastAPI backend ready)

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
