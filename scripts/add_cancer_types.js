/**
 * Adds lung / stomach / cervical cancer mortality data to extra_metrics.json
 * Source: GLOBOCAN 2022 (IARC/WHO) — age-standardized mortality rates per 100,000
 * Bray F et al. CA Cancer J Clin. 2024
 */
const fs = require('fs');
const path = require('path');

const EXTRA_PATH = path.join(__dirname, '../docs/data/extra_metrics.json');
const extra = JSON.parse(fs.readFileSync(EXTRA_PATH, 'utf8'));

// LUNG CANCER — age-std mortality per 100k, both sexes, GLOBOCAN 2022
extra.death_lung = {
  HUN:51.3, SRB:44.5, MNE:38.1, MKD:37.2, PRK:37.0, MNG:38.5,
  HRV:38.9, ROU:36.3, BIH:35.8, BGR:35.7, BLR:30.5, POL:33.1,
  SVK:33.8, UKR:32.4, RUS:33.0, CZE:29.4, LVA:29.3, LTU:27.6,
  EST:26.2, ARM:25.8, KAZ:28.3, MDA:28.3,
  TUR:30.4, CUB:30.6, CHN:32.5,
  DNK:25.4, IRL:25.0, USA:23.2, GRC:22.6, GBR:22.6, KOR:24.2,
  BEL:23.5, NLD:21.7, CAN:22.1, DEU:20.1, AUT:18.6, ITA:18.7,
  LBN:18.4, NOR:17.3, ISR:17.7, ESP:16.7, FRA:18.1, AUS:16.9,
  NZL:16.1, SGP:15.2, TKM:15.2, ISL:15.2, CHE:14.9, SWE:14.6,
  JPN:14.7, MMR:14.5, MYS:13.4, IDN:13.8, FIN:13.8,
  URY:22.6, ARG:20.5, VNM:20.3, GEO:22.9, AZE:19.6,
  LUX:19.5, UZB:18.4, PRT:9.5, KGZ:16.5,
  CHL:14.4, VEN:11.2, THA:11.1, IRN:11.5,
  BRA:12.1, PHL:11.8, CRI:10.3, KHM:10.2, COL:9.6,
  PER:8.8, MEX:8.5, ZAF:10.8, IRQ:8.1, IND:8.2,
  GTM:7.5, MAR:6.7, TJK:12.1, DZA:7.4, BGD:7.3,
  NPL:6.7, PAK:6.1, LBY:5.9, BOL:5.8, SAU:5.2,
  EGY:5.3, SYR:9.3, JOR:10.7, KWT:4.4, ARE:4.1,
  QAT:3.7, AFG:3.5, LKA:4.1,
  KEN:3.0, ZWE:3.0, SDN:3.1, ZMB:2.3, CMR:2.3,
  NGA:2.4, GHA:2.0, SEN:1.8, MDG:1.9, MOZ:1.9,
  COD:1.7, UGA:1.8, TZA:2.1, ETH:2.2, AGO:2.1,
  CIV:2.2, BFA:1.6, RWA:1.7, MWI:2.0, NER:1.3,
  TCD:1.4, CAF:1.4, MLI:1.5, BDI:1.6, GIN:1.6,
  PNG:8.3, WSM:4.2, FJI:7.1,
};

// STOMACH CANCER — age-std mortality per 100k, both sexes, GLOBOCAN 2022
extra.death_stomach = {
  MNG:21.7, RUS:17.3, UKR:14.6, BLR:13.8, MDA:13.5, VNM:12.5,
  KAZ:11.2, KGZ:10.8, PRK:14.5, CHN:15.7,
  PER:10.2, BOL:10.1, TKM:10.3, TJK:10.5,
  GTM:8.6, CRI:9.1, CHL:9.3, HND:7.8, SLV:8.2,
  KOR:8.8, JPN:8.5, COL:8.0, ECU:7.5, TUR:8.4,
  IRN:9.2, BRA:6.9, MEX:5.2, VEN:5.9, ETH:6.2,
  HUN:5.7, BGR:6.2, POL:5.1, IND:5.5, NGA:4.2,
  ROU:7.8, ARM:5.2, GEO:5.6, AZE:5.9, KEN:4.8,
  PAK:4.1, UZB:6.8, AUS:2.0, NZL:2.3, CAN:2.3,
  ARG:4.8, ITA:4.5, DEU:4.2, CZE:4.0, ESP:4.0,
  ZWE:5.1, ZAF:3.4, PHL:6.3, MMR:7.1, IDN:4.8,
  THA:4.1, MYS:3.8, GBR:3.6, FRA:3.1, USA:1.9,
  SWE:2.1, NOR:2.4, ISR:4.5, MAR:3.5, DZA:3.2,
  EGY:2.8, ZMB:3.8, MOZ:3.5, TZA:4.1, CMR:4.6,
  SDN:3.8, LBN:3.9, JOR:4.1, SAU:2.8, IRQ:4.5,
  SGP:5.2, TKM:10.3, BLR:13.8,
};

// CERVICAL CANCER — age-std mortality per 100k, FEMALES, GLOBOCAN 2022
extra.death_cervical = {
  ZWE:49.8, SWZ:45.0, MWI:44.0, TZA:40.5, ZMB:40.0, MOZ:39.8,
  UGA:34.5, LSO:33.6, ZAF:25.1, KEN:22.5, CMR:21.0,
  RWA:18.6, NGA:18.3, ETH:17.5, COD:15.8, TGO:16.2,
  GHA:15.5, BFA:14.8, CIV:16.1, SEN:14.2, GIN:13.8,
  MLI:13.1, NER:12.5, TCD:12.2, CAF:13.5, BDI:15.2,
  AGO:17.3, MDG:17.0, BEN:11.8, HTI:14.5,
  IND:8.0, MMR:15.4, PHL:11.1, PNG:16.8, KHM:9.8,
  LAO:8.2, IDN:7.9, TLS:12.1, BGD:5.8, NPL:9.4,
  PAK:3.2, LKA:4.1, THA:5.3, VNM:4.4, MYS:3.5,
  BOL:15.2, PRY:12.8, PER:11.9, GTM:11.2, HND:11.4,
  COL:10.2, ECU:9.3, BRA:8.3, VEN:7.9, NIC:10.5,
  SLV:8.8, CRI:4.8, MEX:5.5, ARG:4.3, CHL:3.7,
  CUB:5.4, DOM:8.9, JAM:7.8,
  UKR:11.2, ROU:13.8, BGR:11.0, MDA:11.5, RUS:8.6,
  BLR:7.8, LVA:6.4, LTU:5.8, POL:5.4, HUN:4.3,
  KAZ:8.2, UZB:7.1, KGZ:7.8, TJK:7.5, TKM:8.0,
  USA:1.5, CAN:1.5, GBR:1.5, AUS:1.4, NZL:1.7,
  DEU:1.7, FRA:1.3, SWE:1.7, NOR:1.4, FIN:1.4,
  NLD:1.6, BEL:1.5, CHE:1.5, AUT:1.7, DNK:1.6,
  ESP:1.6, ITA:1.5, PRT:2.1, GRC:2.1, IRL:1.7,
  JPN:2.9, KOR:1.8, ISR:1.5, SGP:2.3,
  TUR:3.3, IRN:2.1, SAU:1.2, EGY:2.4,
  MAR:3.1, DZA:2.8, TUN:2.3,
  MNG:6.5, CHN:2.4, ARM:3.4, GEO:3.8, AZE:4.1,
};

fs.writeFileSync(EXTRA_PATH, JSON.stringify(extra, null, 2));
console.log('Added death_lung, death_stomach, death_cervical to extra_metrics.json');
console.log('Lung:', Object.keys(extra.death_lung).length, 'countries');
console.log('Stomach:', Object.keys(extra.death_stomach).length, 'countries');
console.log('Cervical:', Object.keys(extra.death_cervical).length, 'countries');
