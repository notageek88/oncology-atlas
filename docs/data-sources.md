# Data Sources

## GLOBOCAN 2022 (Primary)
- **URL:** https://gco.iarc.fr/today/en/
- **API:** https://gco.iarc.fr/today/en/api/
- **Coverage:** 185 countries, 36 cancer types
- **Metrics:** Incidence, Mortality (age-standardized per 100k)
- **License:** Open (WHO/IARC)
- **How to fetch:** See `backend/app/globocan.py`

## SEER (USA deep data)
- **URL:** https://seer.cancer.gov/
- **Coverage:** USA, state level, 50+ years
- **Metrics:** Incidence, mortality, survival 1/3/5yr, treatment
- **License:** Open (NCI)
- **Access:** Registration required, data available as CSV

## TCGA (Genomic)
- **URL:** https://www.cancer.gov/ccg/research/genome-sequencing/tcga
- **Coverage:** 33 tumor types, genomic + clinical
- **License:** Open (NCI)
- **Access:** GDC Data Portal

## OECD Health Statistics
- **URL:** https://stats.oecd.org/
- **Coverage:** OECD countries, treatment data
- **License:** Open

## Eurostat
- **URL:** https://ec.europa.eu/eurostat/
- **Coverage:** EU countries, detailed breakdown
- **License:** Open

## GeoJSON (Countries)
- **URL:** https://github.com/datasets/geo-countries
- **License:** PDDL (open)
