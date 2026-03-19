# OncologyAtlas 🗺️

**Open-source global cancer data visualization**

Interactive maps showing where people got sick, what type of cancer, how they were treated, and survival outcomes — by country and region.

## What It Does

- **Where** — Heatmaps of cancer incidence and mortality by country/region
- **What type** — 36+ cancer types with 30-year trends
- **How treated** — Surgery vs chemo vs radiation vs immunotherapy by country
- **Outcomes** — 1/3/5-year survival rates compared globally
- **Risk factors** — Correlations with pollution, industry, diet

## Data Sources

| Source | Coverage | License |
|--------|----------|---------|
| [GLOBOCAN](https://gco.iarc.fr/) | 185 countries, 36 cancer types | Open |
| [SEER](https://seer.cancer.gov/) | USA, 50 years | Open |
| [TCGA](https://www.cancer.gov/tcga) | Genomic tumor data | Open |
| OECD Health Stats | OECD countries | Open |
| Eurostat | EU countries | Open |

## Tech Stack

```
Backend:  Python 3.11 + FastAPI + PostGIS
Frontend: Leaflet.js + Vanilla JS
Data:     pandas + geopandas
Deploy:   GitHub Pages (frontend) + Fly.io (API)
```

## Quick Start

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
python -m http.server 8080
```

## API

```
GET /api/cancer?country=RU&type=lung&year=2020
GET /api/cancer/compare?countries=RU,DE,US&type=breast
GET /api/cancer/survival?country=RU&type=lung
```

## Roadmap

- [x] Project structure
- [ ] GLOBOCAN data pipeline
- [ ] World map MVP
- [ ] Cancer type filters
- [ ] Survival charts
- [ ] Treatment comparison
- [ ] SEER integration (US state level)
- [ ] Risk factor correlations
- [ ] Public API docs

## License

MIT — free to use, fork, embed.

## Contributing

PRs welcome. Data PRs especially welcome — more countries, better granularity.
