from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List
import json
import os

app = FastAPI(
    title="OncologyAtlas API",
    description="Open cancer data — incidence, mortality, treatment, survival",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"name": "OncologyAtlas API", "version": "0.1.0", "docs": "/docs"}


@app.get("/api/cancer")
def get_cancer_data(
    country: Optional[str] = Query(None, description="ISO 3166-1 alpha-2 country code (e.g. RU, US, DE)"),
    type: Optional[str] = Query(None, description="Cancer type (e.g. lung, breast, colon)"),
    year: Optional[int] = Query(None, description="Year (2020, 2022...)"),
    sex: Optional[str] = Query("all", description="all | male | female"),
):
    """
    Get cancer incidence and mortality data.
    Source: GLOBOCAN (WHO/IARC)
    """
    # TODO: replace with PostGIS queries
    return {
        "country": country,
        "type": type,
        "year": year or 2022,
        "sex": sex,
        "data": [],
        "source": "GLOBOCAN 2022",
        "note": "Data pipeline in progress"
    }


@app.get("/api/cancer/compare")
def compare_countries(
    countries: str = Query(..., description="Comma-separated ISO codes: RU,DE,US"),
    type: str = Query(..., description="Cancer type"),
    metric: str = Query("incidence", description="incidence | mortality | survival_5y"),
):
    """Compare cancer metrics across multiple countries."""
    country_list = [c.strip() for c in countries.split(",")]
    return {
        "countries": country_list,
        "type": type,
        "metric": metric,
        "data": [],
        "source": "GLOBOCAN 2022"
    }


@app.get("/api/cancer/survival")
def get_survival(
    country: str = Query(...),
    type: str = Query(...),
):
    """1/3/5-year survival rates by country and cancer type."""
    return {
        "country": country,
        "type": type,
        "survival_1y": None,
        "survival_3y": None,
        "survival_5y": None,
        "source": "SEER / Eurostat",
        "note": "Coming soon"
    }


@app.get("/api/cancer/types")
def get_cancer_types():
    """List all available cancer types."""
    return {
        "types": [
            "lung", "breast", "colon", "prostate", "stomach",
            "liver", "cervix", "thyroid", "bladder", "leukemia",
            "melanoma", "kidney", "pancreas", "ovary", "brain"
        ]
    }


@app.get("/api/cancer/countries")
def get_countries():
    """List all countries with available data."""
    return {
        "count": 185,
        "source": "GLOBOCAN 2022",
        "note": "Full list in /data/countries.json"
    }
