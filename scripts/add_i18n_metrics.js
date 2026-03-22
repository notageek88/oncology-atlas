/**
 * Adds missing metric translations to i18n.json for all 11 languages
 * Keys: smoking_prev, obesity_prev, alcohol_pc, pm25_pollution, uhc_index
 *   + death_lung, death_stomach, death_cervical, death_melanoma, death_pancreatic
 *   + lung/stomach/cervical/melanoma/pancreatic short labels
 *   + cancer_burden, cancer_encyclopedia, causes_prevention, best_countries
 *   (for languages missing them: zh, es, ar, hi, pt, fr, de, ja, id)
 */
const fs = require('fs');
const path = require('path');

const I18N_PATH = path.join(__dirname, '../docs/data/i18n.json');
const data = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));

const newKeys = {
  en: {
    smoking_prev: '🚬 Smoking prevalence %',
    obesity_prev: '⚖ Obesity prevalence %',
    alcohol_pc: '🍷 Alcohol consumption L/capita',
    pm25_pollution: '💨 PM2.5 air pollution μg/m³',
    uhc_index: '🏥 UHC Service Coverage Index',
    death_lung: '🫁 Lung cancer',
    death_stomach: '🟤 Stomach cancer',
    death_cervical: '🔴 Cervical cancer',
    death_melanoma: '☀ Melanoma',
    death_pancreatic: '🟡 Pancreatic cancer',
    lung: 'Lung', stomach: 'Stomach', cervical: 'Cervical',
    melanoma: 'Melanoma', pancreatic: 'Pancreatic',
    cancer_burden: 'Cancer Burden',
    cancer_encyclopedia: 'Cancer Encyclopedia',
    causes_prevention: 'Causes & Prevention',
    best_countries: 'Best Countries for Treatment'
  },
  ru: {
    smoking_prev: '🚬 Распространённость курения %',
    obesity_prev: '⚖ Распространённость ожирения %',
    alcohol_pc: '🍷 Потребление алкоголя л/чел.',
    pm25_pollution: '💨 Загрязнение воздуха PM2.5 мкг/м³',
    uhc_index: '🏥 Индекс охвата медпомощью (UHC)',
    death_lung: '🫁 Рак лёгких',
    death_stomach: '🟤 Рак желудка',
    death_cervical: '🔴 Рак шейки матки',
    death_melanoma: '☀ Меланома',
    death_pancreatic: '🟡 Рак поджелудочной',
    lung: 'Лёгкие', stomach: 'Желудок', cervical: 'Шейка матки',
    melanoma: 'Меланома', pancreatic: 'Поджелудочная',
    cancer_burden: 'Онкологическое бремя',
    cancer_encyclopedia: 'Энциклопедия рака',
    causes_prevention: 'Причины и профилактика',
    best_countries: 'Лучшие страны для лечения'
  },
  zh: {
    smoking_prev: '🚬 吸烟率 %',
    obesity_prev: '⚖ 肥胖率 %',
    alcohol_pc: '🍷 人均酒精消费量 升',
    pm25_pollution: '💨 PM2.5空气污染 μg/m³',
    uhc_index: '🏥 全民健康覆盖指数',
    death_lung: '🫁 肺癌',
    death_stomach: '🟤 胃癌',
    death_cervical: '🔴 宫颈癌',
    death_melanoma: '☀ 黑色素瘤',
    death_pancreatic: '🟡 胰腺癌',
    lung: '肺', stomach: '胃', cervical: '宫颈',
    melanoma: '黑色素瘤', pancreatic: '胰腺',
    cancer_burden: '癌症负担',
    cancer_encyclopedia: '癌症百科',
    causes_prevention: '病因与预防',
    best_countries: '最佳治疗国家',
    forecast_note: '虚线：基于5年趋势的2030年预测。仅供参考。'
  },
  es: {
    smoking_prev: '🚬 Prevalencia del tabaquismo %',
    obesity_prev: '⚖ Prevalencia de obesidad %',
    alcohol_pc: '🍷 Consumo de alcohol L/cápita',
    pm25_pollution: '💨 Contaminación PM2.5 μg/m³',
    uhc_index: '🏥 Índice de Cobertura Sanitaria Universal',
    death_lung: '🫁 Cáncer de pulmón',
    death_stomach: '🟤 Cáncer de estómago',
    death_cervical: '🔴 Cáncer cervical',
    death_melanoma: '☀ Melanoma',
    death_pancreatic: '🟡 Cáncer de páncreas',
    lung: 'Pulmón', stomach: 'Estómago', cervical: 'Cervical',
    melanoma: 'Melanoma', pancreatic: 'Páncreas',
    cancer_burden: 'Carga oncológica',
    cancer_encyclopedia: 'Enciclopedia del cáncer',
    causes_prevention: 'Causas y prevención',
    best_countries: 'Mejores países para tratamiento'
  },
  ar: {
    smoking_prev: '🚬 معدل انتشار التدخين %',
    obesity_prev: '⚖ معدل انتشار السمنة %',
    alcohol_pc: '🍷 استهلاك الكحول لتر/فرد',
    pm25_pollution: '💨 تلوث الهواء PM2.5 μg/m³',
    uhc_index: '🏥 مؤشر التغطية الصحية الشاملة',
    death_lung: '🫁 سرطان الرئة',
    death_stomach: '🟤 سرطان المعدة',
    death_cervical: '🔴 سرطان عنق الرحم',
    death_melanoma: '☀ الورم الميلانيني',
    death_pancreatic: '🟡 سرطان البنكرياس',
    lung: 'الرئة', stomach: 'المعدة', cervical: 'عنق الرحم',
    melanoma: 'الميلانيني', pancreatic: 'البنكرياس',
    cancer_burden: 'عبء السرطان',
    cancer_encyclopedia: 'موسوعة السرطان',
    causes_prevention: 'الأسباب والوقاية',
    best_countries: 'أفضل الدول للعلاج'
  },
  hi: {
    smoking_prev: '🚬 धूम्रपान प्रसार %',
    obesity_prev: '⚖ मोटापा प्रसार %',
    alcohol_pc: '🍷 शराब की खपत लीटर/व्यक्ति',
    pm25_pollution: '💨 PM2.5 वायु प्रदूषण μg/m³',
    uhc_index: '🏥 UHC सेवा कवरेज सूचकांक',
    death_lung: '🫁 फेफड़े का कैंसर',
    death_stomach: '🟤 पेट का कैंसर',
    death_cervical: '🔴 गर्भाशय ग्रीवा कैंसर',
    death_melanoma: '☀ मेलानोमा',
    death_pancreatic: '🟡 अग्नाशय कैंसर',
    lung: 'फेफड़े', stomach: 'पेट', cervical: 'गर्भाशय ग्रीवा',
    melanoma: 'मेलानोमा', pancreatic: 'अग्नाशय',
    cancer_burden: 'कैंसर भार',
    cancer_encyclopedia: 'कैंसर विश्वकोश',
    causes_prevention: 'कारण एवं रोकथाम',
    best_countries: 'इलाज के लिए सर्वश्रेष्ठ देश'
  },
  pt: {
    smoking_prev: '🚬 Prevalência do tabagismo %',
    obesity_prev: '⚖ Prevalência de obesidade %',
    alcohol_pc: '🍷 Consumo de álcool L/capita',
    pm25_pollution: '💨 Poluição PM2.5 μg/m³',
    uhc_index: '🏥 Índice de Cobertura Universal de Saúde',
    death_lung: '🫁 Cancro do pulmão',
    death_stomach: '🟤 Cancro do estômago',
    death_cervical: '🔴 Cancro cervical',
    death_melanoma: '☀ Melanoma',
    death_pancreatic: '🟡 Cancro do pâncreas',
    lung: 'Pulmão', stomach: 'Estômago', cervical: 'Cervical',
    melanoma: 'Melanoma', pancreatic: 'Pâncreas',
    cancer_burden: 'Carga oncológica',
    cancer_encyclopedia: 'Enciclopédia do cancro',
    causes_prevention: 'Causas e prevenção',
    best_countries: 'Melhores países para tratamento'
  },
  fr: {
    smoking_prev: '🚬 Prévalence du tabagisme %',
    obesity_prev: '⚖ Prévalence de l\'obésité %',
    alcohol_pc: '🍷 Consommation d\'alcool L/habitant',
    pm25_pollution: '💨 Pollution PM2.5 μg/m³',
    uhc_index: '🏥 Indice de couverture santé universelle',
    death_lung: '🫁 Cancer du poumon',
    death_stomach: '🟤 Cancer de l\'estomac',
    death_cervical: '🔴 Cancer du col de l\'utérus',
    death_melanoma: '☀ Mélanome',
    death_pancreatic: '🟡 Cancer du pancréas',
    lung: 'Poumon', stomach: 'Estomac', cervical: 'Col utérin',
    melanoma: 'Mélanome', pancreatic: 'Pancréas',
    cancer_burden: 'Fardeau oncologique',
    cancer_encyclopedia: 'Encyclopédie du cancer',
    causes_prevention: 'Causes et prévention',
    best_countries: 'Meilleurs pays pour le traitement'
  },
  de: {
    smoking_prev: '🚬 Raucherprävalenz %',
    obesity_prev: '⚖ Adipositasprävalenz %',
    alcohol_pc: '🍷 Alkoholkonsum L/Kopf',
    pm25_pollution: '💨 PM2.5-Luftverschmutzung μg/m³',
    uhc_index: '🏥 UHC-Versorgungsindex',
    death_lung: '🫁 Lungenkrebs',
    death_stomach: '🟤 Magenkrebs',
    death_cervical: '🔴 Gebärmutterhalskrebs',
    death_melanoma: '☀ Melanom',
    death_pancreatic: '🟡 Bauchspeicheldrüsenkrebs',
    lung: 'Lunge', stomach: 'Magen', cervical: 'Gebärmutterhals',
    melanoma: 'Melanom', pancreatic: 'Pankreas',
    cancer_burden: 'Krebslast',
    cancer_encyclopedia: 'Krebs-Enzyklopädie',
    causes_prevention: 'Ursachen & Prävention',
    best_countries: 'Beste Länder für Behandlung'
  },
  ja: {
    smoking_prev: '🚬 喫煙率 %',
    obesity_prev: '⚖ 肥満率 %',
    alcohol_pc: '🍷 一人当たりアルコール消費量 L',
    pm25_pollution: '💨 PM2.5大気汚染 μg/m³',
    uhc_index: '🏥 UHCサービスカバレッジ指数',
    death_lung: '🫁 肺がん',
    death_stomach: '🟤 胃がん',
    death_cervical: '🔴 子宮頸がん',
    death_melanoma: '☀ 悪性黒色腫',
    death_pancreatic: '🟡 膵臓がん',
    lung: '肺', stomach: '胃', cervical: '子宮頸部',
    melanoma: '黒色腫', pancreatic: '膵臓',
    cancer_burden: 'がん負担',
    cancer_encyclopedia: 'がん百科事典',
    causes_prevention: '原因と予防',
    best_countries: '治療に最適な国'
  },
  id: {
    smoking_prev: '🚬 Prevalensi merokok %',
    obesity_prev: '⚖ Prevalensi obesitas %',
    alcohol_pc: '🍷 Konsumsi alkohol L/kapita',
    pm25_pollution: '💨 Polusi udara PM2.5 μg/m³',
    uhc_index: '🏥 Indeks Cakupan Layanan UHC',
    death_lung: '🫁 Kanker paru-paru',
    death_stomach: '🟤 Kanker lambung',
    death_cervical: '🔴 Kanker serviks',
    death_melanoma: '☀ Melanoma',
    death_pancreatic: '🟡 Kanker pankreas',
    lung: 'Paru', stomach: 'Lambung', cervical: 'Serviks',
    melanoma: 'Melanoma', pancreatic: 'Pankreas',
    cancer_burden: 'Beban kanker',
    cancer_encyclopedia: 'Ensiklopedia kanker',
    causes_prevention: 'Penyebab & pencegahan',
    best_countries: 'Negara terbaik untuk pengobatan'
  }
};

let updated = 0;
Object.entries(newKeys).forEach(([lang, keys]) => {
  if (!data[lang]) return;
  Object.entries(keys).forEach(([k, v]) => {
    if (!data[lang][k]) {
      data[lang][k] = v;
      updated++;
    }
    // Also overwrite if it's already there but may have wrong value (force update for new risk factor keys)
    // Actually keep existing - don't overwrite
  });
});

fs.writeFileSync(I18N_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log('✓ Added ' + updated + ' new translation keys across all languages');
Object.keys(newKeys).forEach(lang => {
  console.log('  ' + lang + ': ' + Object.keys(data[lang]).length + ' total keys');
});
