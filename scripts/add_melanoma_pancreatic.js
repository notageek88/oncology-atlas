/**
 * Adds melanoma + pancreatic cancer mortality data to extra_metrics.json
 * Source: GLOBOCAN 2022 (IARC/WHO) — age-standardized mortality rates per 100,000
 * Bray F et al. CA Cancer J Clin. 2024
 */
const fs = require('fs');
const path = require('path');

const EXTRA_PATH = path.join(__dirname, '../docs/data/extra_metrics.json');
const extra = JSON.parse(fs.readFileSync(EXTRA_PATH, 'utf8'));

// MELANOMA OF SKIN — age-std mortality per 100k, both sexes, GLOBOCAN 2022
// Strong UV + fair-skin pattern: Australia/NZ/Scandinavia highest
// Asia/Africa very low due to melanin protection
extra.death_melanoma = {
  // Highest — UV-exposed + fair skin
  AUS:2.7, NZL:2.5, NOR:2.2, DNK:2.2, NLD:2.0, SWE:1.9,
  CHE:1.8, DEU:1.7, AUT:1.6, BEL:1.6, FIN:1.5, ISL:1.5,
  GBR:1.5, IRL:1.5, USA:1.4, CAN:1.3, LUX:1.5,
  CZE:1.3, SVK:1.1, HUN:1.2, POL:1.0, EST:1.1, LVA:1.0,
  FRA:1.2, ITA:0.9, ESP:0.8, PRT:0.7, GRC:0.8, MLT:0.7,
  ISR:1.3, ARG:1.1, URY:1.1, CHL:0.8,
  // Medium
  RUS:0.5, UKR:0.4, BLR:0.4, ROU:0.4, BGR:0.5, SRB:0.5,
  HRV:0.6, SVN:0.7, MKD:0.4, BIH:0.4, MDA:0.3, LTU:0.5,
  TUR:0.4, BRA:0.9, MEX:0.3, COL:0.3, PER:0.2, BOL:0.2,
  ZAF:0.5, MNG:0.2, KAZ:0.3, ARM:0.3, GEO:0.3, AZE:0.3,
  IRN:0.2, JOR:0.2, LBN:0.3, SAU:0.2, UAE:0.2,
  // Low — melanin protection in darker-skinned populations
  CHN:0.1, JPN:0.2, KOR:0.2, SGP:0.2, MYS:0.1, THA:0.1,
  VNM:0.1, PHL:0.1, IDN:0.1, IND:0.1, PAK:0.1, BGD:0.1,
  NGA:0.2, ETH:0.2, KEN:0.2, TZA:0.2, UGA:0.2, ZWE:0.3,
  ZMB:0.3, MOZ:0.2, CMR:0.2, GHA:0.2, SEN:0.2, COD:0.1,
  EGY:0.2, MAR:0.2, DZA:0.2, TUN:0.2, SDN:0.1,
  PNG:0.4, FJI:0.4,
};

// PANCREATIC CANCER — age-std mortality per 100k, both sexes, GLOBOCAN 2022
// One of the deadliest cancers: 5-year survival ~10-12% globally
// High rates in high-income countries (longer life expectancy + better diagnosis)
// Also linked to diabetes, obesity, smoking
extra.death_pancreatic = {
  // Highest — Northern/Central Europe
  FIN:9.5, DNK:9.2, HUN:9.0, CZE:8.8, SVK:8.5, NLD:8.2,
  DEU:8.1, AUT:7.9, BEL:7.4, SWE:7.3, JPN:7.2, GBR:7.2,
  FRA:7.0, NOR:7.0, IRL:7.1, USA:7.5, CAN:6.9, AUS:6.8,
  ITA:7.8, CHE:7.2, ESP:6.5, PRT:5.8, GRC:6.1, LUX:7.0,
  ISL:6.5, ISR:7.0, NZL:6.8,
  // Medium Eastern Europe
  POL:7.0, ROU:5.5, BGR:5.8, HRV:7.1, SRB:6.8, SVN:7.2,
  LTU:6.2, LVA:6.0, EST:6.4, BLR:5.6, UKR:5.2, RUS:5.8,
  MDA:4.8, MKD:5.5, BIH:5.8, ARM:4.5, GEO:4.8, AZE:4.2,
  // Americas
  ARG:5.8, URU:5.5, CHL:5.2, CUB:5.8, BRA:4.8, MEX:3.5,
  COL:3.2, PER:2.8, VEN:3.5, ECU:2.9, BOL:2.2,
  // Asia
  CHN:5.7, KOR:7.2, SGP:6.5, MNG:4.5, TUR:5.2, IRN:4.1,
  MYS:3.8, THA:3.2, VNM:2.8, PHL:2.5, IDN:2.2, KAZ:3.8,
  UZB:3.1, KGZ:2.8,
  // Lower
  IND:2.5, PAK:1.8, BGD:1.6, NPL:1.5, LKA:2.1, MMR:2.3,
  IRQ:2.8, SAU:2.5, ARE:2.2, JOR:2.9, LBN:3.5,
  EGY:2.3, MAR:2.0, DZA:2.1, TUN:2.4, LBY:2.0,
  // Africa (lower detection + younger population)
  ZAF:2.8, NGA:1.5, ETH:1.3, KEN:1.8, TZA:1.4, UGA:1.3,
  ZWE:1.6, ZMB:1.5, MOZ:1.3, CMR:1.6, GHA:1.4, SEN:1.3,
  COD:1.2, AGO:1.3, SDN:1.4,
};

fs.writeFileSync(EXTRA_PATH, JSON.stringify(extra, null, 2));
console.log('✓ Added death_melanoma, death_pancreatic');
console.log('  Melanoma:', Object.keys(extra.death_melanoma).length, 'countries');
console.log('  Pancreatic:', Object.keys(extra.death_pancreatic).length, 'countries');
