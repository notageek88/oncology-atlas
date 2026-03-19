"""
WHO GHO Data Pipeline for OncologyAtlas
Fetches real cancer data from WHO Global Health Observatory API
Docs: https://www.who.int/data/gho/info/gho-odata-api
"""
import requests
import json
import time
from pathlib import Path

API_BASE = "https://ghoapi.azureedge.net/api"
DATA_DIR = Path(__file__).parent.parent.parent / "data"

# Cancer indicators available in WHO GHO
INDICATORS = {
    "breast_cancer_daly": "SA_0000001419",       # Age-standardized DALYs, breast cancer per 100k
    "cervical_cancer_screening": "NCD_CCS_cervicalcancerpgmcvg",  # Cervical screening coverage %
    "cancer_registry": "NCD_CCS_CancerRegNational",  # Has national cancer registry
    "cancer_surgery": "NCD_CCS_cancer_surgery",   # Cancer surgery availability
    "cancer_plan": "NCD_CCS_CancerPlan",          # National cancer action plan
    "oral_cancer_rate": "ORAL_HEALTH_CANCER_LIPORALCAVITY_100K",  # Lip/oral cancer per 100k
    "oral_cancer_cases": "ORAL_HEALTH_CANCER_LIPORALCAVITY_NEWCASE_NUMBER",
}


def fetch_indicator(indicator_code: str) -> list:
    """Fetch all data for a given indicator from WHO GHO API."""
    url = f"{API_BASE}/{indicator_code}"
    try:
        r = requests.get(url, headers={"Accept": "application/json"}, timeout=30)
        r.raise_for_status()
        return r.json().get("value", [])
    except Exception as e:
        print(f"  Error fetching {indicator_code}: {e}")
        return []


def build_country_dataset() -> dict:
    """
    Build a country-level dataset with all available cancer metrics.
    Returns: { "RUS": { "breast_cancer_daly": 142, ... }, ... }
    """
    dataset = {}

    for name, code in INDICATORS.items():
        print(f"Fetching: {name} ({code})...")
        records = fetch_indicator(code)
        
        # Group by country, take latest year
        by_country = {}
        for r in records:
            country = r.get("SpatialDim")
            year = r.get("TimeDim", 0)
            value = r.get("NumericValue") or r.get("Value")
            sex = r.get("Dim1", "SEX_BTSX")
            
            if not country or country == "GLOBAL":
                continue
            if sex not in ("SEX_BTSX", None, ""):
                continue  # keep 'both sexes' only
                
            if country not in by_country or by_country[country]["year"] < year:
                by_country[country] = {"year": year, "value": value}
        
        # Merge into dataset
        for country, data in by_country.items():
            if country not in dataset:
                dataset[country] = {}
            dataset[country][name] = data["value"]
            dataset[country][f"{name}_year"] = data["year"]
        
        time.sleep(0.3)  # be nice to WHO API

    return dataset


def save_for_frontend(dataset: dict, path: Path):
    """Save as frontend-ready JSON."""
    path.parent.mkdir(parents=True, exist_ok=True)
    # Convert to list format for easier JS consumption
    result = [
        {"country": country, **metrics}
        for country, metrics in dataset.items()
    ]
    path.write_text(json.dumps(result, indent=2, ensure_ascii=False))
    print(f"Saved {len(result)} countries to {path}")
    return result


if __name__ == "__main__":
    print("=" * 50)
    print("OncologyAtlas WHO Data Pipeline")
    print("=" * 50)
    
    dataset = build_country_dataset()
    
    # Save raw
    raw_path = DATA_DIR / "raw" / "who_gho_cancer.json"
    raw_path.parent.mkdir(parents=True, exist_ok=True)
    raw_path.write_text(json.dumps(dataset, indent=2))
    print(f"\nRaw data: {raw_path} ({len(dataset)} countries)")
    
    # Save processed (for frontend)
    processed_path = DATA_DIR / "processed" / "countries_cancer.json"
    result = save_for_frontend(dataset, processed_path)
    
    # Print sample
    print("\nSample (first 3 countries):")
    for item in result[:3]:
        print(f"  {item['country']}: {item}")
