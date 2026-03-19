"""
GLOBOCAN data fetcher.
Source: https://gco.iarc.fr/today/en/
API: https://gco.iarc.fr/today/en/api/
"""
import requests
import pandas as pd
from pathlib import Path

GLOBOCAN_API = "https://gco.iarc.fr/today/en/api"
RAW_DATA_DIR = Path(__file__).parent.parent.parent / "data" / "raw"


def fetch_cancer_data(cancer_id: int = 0, sex: int = 0, year: int = 2022) -> dict:
    """
    Fetch GLOBOCAN data.
    cancer_id: 0=all cancers, 1=lip/oral, 2=nasopharynx, ...
    sex: 0=both, 1=male, 2=female
    """
    url = f"{GLOBOCAN_API}/data/download/csv/data-type-1/cancer-{cancer_id}/sex-{sex}/population-900"
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return {"ok": True, "data": response.text, "url": url}
    except Exception as e:
        return {"ok": False, "error": str(e), "url": url}


def save_raw_data(data: str, filename: str):
    """Save raw GLOBOCAN CSV to data/raw/"""
    RAW_DATA_DIR.mkdir(parents=True, exist_ok=True)
    filepath = RAW_DATA_DIR / filename
    filepath.write_text(data)
    return filepath


def parse_globocan_csv(filepath: Path) -> pd.DataFrame:
    """Parse GLOBOCAN CSV into a clean DataFrame."""
    df = pd.read_csv(filepath, skiprows=6)
    # Clean up columns
    df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_")
    return df


if __name__ == "__main__":
    print("Fetching GLOBOCAN all-cancer data (both sexes)...")
    result = fetch_cancer_data(cancer_id=0, sex=0)
    if result["ok"]:
        path = save_raw_data(result["data"], "globocan_all_2022.csv")
        print(f"Saved to {path}")
    else:
        print(f"Error: {result['error']}")
