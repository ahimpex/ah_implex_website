/**
 * ==============================================================================
 * A&H IMPEX - PRODUCT CATALOG DATA MODULE (FROM SRC/ASSETS/PRODUCT FOLDER)
 * ==============================================================================
 * Configured with images from the dedicated src/assets/Product/ folder:
 * - luxury bedsheets.jpg
 * - High thread count hotel & retail bedding crafted from combed long-staple cotton..jfif
 * - Engineered high-durability fabrics for oil & gas, construction, and utilities..jfif
 * - Plush, ultra-absorbent terry towelling with reinforced double-stitched borders..jfif
 * - Antimicrobial, bleach-safe fabrics for hospital systems and surgical centers..jfif
 * - carded yarn canvas.jfif
 * ==============================================================================
 */

// Local Product Asset Imports (Clean URL-safe filenames for production deployment)
import luxuryBedsheetsImg from '../assets/Product/luxury-bedsheets.jpg';
import highThreadCountImg from '../assets/Product/high-thread-count-bedding.jfif';
import industrialFabricsImg from '../assets/Product/industrial-workwear.jpg';
import terryTowelsImg from '../assets/Product/plush-terry-towelling.jfif';
import medicalFabricsImg from '../assets/Product/hospital.jpg';
import cardedYarnCanvasImg from '../assets/Product/carded-yarn-canvas.jfif';
import curtainsImg from '../assets/Product/curtains.jfif';
import tableClothingImg from '../assets/Product/table-clothing.jpg';

export const PRODUCT_IMAGES = {
  luxuryBedsheets: luxuryBedsheetsImg,
  highThreadCount: highThreadCountImg,
  industrialFabrics: industrialFabricsImg,
  industrialWorkwear: industrialFabricsImg,
  terryTowels: terryTowelsImg,
  medicalFabrics: medicalFabricsImg,
  cardedYarnCanvas: cardedYarnCanvasImg,
  curtains: curtainsImg,
  tableClothing: tableClothingImg,
};

export function getProductFallbackImage(product) {
  if (!product) return tableClothingImg;
  
  const text = `${product.id || ''} ${product.title || ''} ${product.category || ''} ${product.category_name || ''} ${product.categoryName || ''} ${product.tagline || ''} ${product.description || ''} ${product.badge || ''}`.toLowerCase();
  
  // 1. Table Linens, Table Clothing, Napkins & Banquet Dining
  if (text.includes('table') || text.includes('napkin') || text.includes('dining') || text.includes('banquet') || text.includes('runner') || text.includes('cloth') || text.includes('damask')) {
    return tableClothingImg;
  }
  // 2. Curtains, Drapery, Canvas & Duck Fabric
  if (text.includes('curtain') || text.includes('drapery') || text.includes('canvas') || text.includes('duck') || text.includes('window') || text.includes('blind')) {
    return curtainsImg;
  }
  // 3. Towels & Terry Bath Linens
  if (text.includes('towel') || text.includes('terry') || text.includes('bath') || text.includes('absorbent') || text.includes('plush') || text.includes('resort') || text.includes('550') || text.includes('700')) {
    return terryTowelsImg;
  }
  // 4. Medical, Hospital Scrubs & Autoclavable Fabrics
  if (text.includes('hospital') || text.includes('medical') || text.includes('scrub') || text.includes('autoclav') || text.includes('barrier') || text.includes('drape') || text.includes('surgical') || text.includes('bleach') || text.includes('antimicrobial') || text.includes('poplin')) {
    return medicalFabricsImg;
  }
  // 5. Yarn Cones & OEM Weaving
  if (text.includes('carded') || text.includes('cone') || text.includes('yarn') || text.includes('greige') || text.includes('oem') || text.includes('weaving')) {
    return cardedYarnCanvasImg;
  }
  // 6. Industrial Twill & Workwear Uniforms
  if (text.includes('workwear') || text.includes('twill') || text.includes('industrial') || text.includes('durability') || text.includes('flame') || text.includes('apparel') || text.includes('oil') || text.includes('gas') || text.includes('11612') || text.includes('heavy-duty')) {
    return industrialFabricsImg;
  }
  // 7. High Thread Count Hotel Percale Bedding
  if (text.includes('thread') || text.includes('percale') || text.includes('300tc') || text.includes('bedding') || text.includes('flagship')) {
    return highThreadCountImg;
  }
  // 8. Luxury Sateen Bedding Collection
  if (text.includes('sateen') || text.includes('luxury') || text.includes('bed') || text.includes('sheet') || text.includes('duvet') || text.includes('combed') || text.includes('400tc') || text.includes('1000tc')) {
    return luxuryBedsheetsImg;
  }
  
  return tableClothingImg;
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'home', label: 'Home Textiles' },
  { id: 'hospitality', label: 'Hospitality & Dining' },
  { id: 'apparel', label: 'Apparel & Workwear' },
  { id: 'medical', label: 'Institutional & Medical' },
];

export const PRODUCTS = [
  {
    id: 'prod-01',
    category: 'home',
    categoryName: 'Home Textiles',
    title: 'Luxury Sateen Bedding Collection',
    tagline: 'Ultra-soft 400–1000 Thread Count Combed Cotton',
    description: 'Engineered for five-star comfort, our premium bed linen sets feature long-staple combed cotton with silky luster, breathable weave, and durable hemstitching.',
    image: luxuryBedsheetsImg,
    fallbackImage: luxuryBedsheetsImg,
    specs: {
      composition: '100% Long-Staple Combed Cotton',
      threadCount: '400 TC – 1000 TC Sateen / Percale',
      gsm: '125 – 160 GSM',
      finish: 'Mercerized, Anti-Pilling, Pre-Shrunk',
      sizes: 'Single, Double, Queen, King, Super King',
      colors: 'Reactive dyed / High Fastness',
      moq: '500 Sets / Color',
      leadTime: '30–45 Days'
    },
    features: ['Silky soft drape', 'Breathable natural fibers', 'Commercial laundry tested (200+ washes)', 'OEKO-TEX Certified dyes'],
    badge: 'Luxury Bedding'
  },
  {
    id: 'prod-02',
    category: 'hospitality',
    categoryName: 'Hospitality & Dining',
    title: 'Premium Damask Table Clothing & Dining Linens',
    tagline: 'Commercial grade jacquard damask tablecloths, napkins, & banquet table runners',
    description: 'Engineered for luxury restaurants, 5-star hotels, and banquet venues. Woven from 100% mercerized combed cotton with soil-release, stain-resistant finishes and double-stitched hem borders.',
    image: tableClothingImg,
    fallbackImage: tableClothingImg,
    specs: {
      composition: '100% Combed Cotton / 80-20 Damask Blend',
      gsm: '210 – 260 GSM Heavyweight Dining',
      finish: 'Stain-Release, Anti-Wrinkle, Bleach-Safe',
      sizes: 'Custom Banquet Rounds, Rectangular & Napkins (50x50cm)',
      colors: 'Crisp White, Ivory, Champagne, Custom Pantones',
      moq: '500 Sets / 1,000 Pcs',
      leadTime: '25–35 Days'
    },
    features: ['Commercial laundry durable (300+ wash cycles)', 'High soil-release and stain-repellent finish', 'Precision mitred corners and double-stitched hems', 'OEKO-TEX Standard 100 Certified'],
    badge: 'Banquet & Dining Grade'
  },
  {
    id: 'prod-03',
    category: 'apparel',
    categoryName: 'Apparel & Workwear',
    title: 'Industrial Workwear & High-Durability Twill',
    tagline: 'Engineered high-durability fabrics for oil & gas, construction, and utilities',
    description: 'Precision woven 3/1 twill fabrics engineered for harsh industrial environments. Optional flame-retardant (FR), anti-static, and water-repellent finishes.',
    image: industrialFabricsImg,
    fallbackImage: industrialFabricsImg,
    specs: {
      composition: '100% Cotton / 65-35 Poly-Cotton / FR Blend',
      weave: '3/1 Left-Hand Heavy Twill',
      gsm: '240 – 350 GSM',
      finish: 'Enzyme wash, Flame-Retardant, Oil/Water Repellent',
      sizes: 'Custom Workwear Uniforms & Fabric Rolls',
      colors: 'Navy, Hi-Vis Orange, Khaki, Royal Blue',
      moq: '1,500 Meters',
      leadTime: '35–45 Days'
    },
    features: ['Tear strength exceeds 25N (ISO 13937-2)', 'EN ISO 11612 Compliant Finish', 'Reinforced bar-tacking', 'Zero shrinkage after high-temp wash'],
    badge: 'EN ISO Compliant'
  },
  {
    id: 'prod-04',
    category: 'hospitality',
    categoryName: 'Hospitality & Dining',
    title: '550 - 700 GSM Combed Ring-Spun Hotel Towels',
    tagline: 'Plush, ultra-absorbent terry towelling with reinforced double-stitched borders',
    description: 'Designed specifically for high-turnover industrial laundering in luxury hotel chains and resorts. Woven from 100% 2-ply ring-spun combed loops for maximum absorbency.',
    image: terryTowelsImg,
    fallbackImage: terryTowelsImg,
    specs: {
      composition: '100% Long-Staple Combed Cotton',
      gsm: '550 – 700 GSM Heavyweight Terry',
      finish: 'Chlorine-Resistant Optical Whiteness, Soft Touch',
      sizes: 'Face, Hand, Bath Towel, Bath Sheet, Pool Towel',
      colors: 'Optical White, Sand, Sage, Navy, Charcoal',
      moq: '1,000 Pcs / Size',
      leadTime: '30 Days'
    },
    features: ['Double-needle lockstitched hems', 'Chlorine & peroxide resistant vat dyeing', 'Fast water absorption (< 3 seconds)', 'Zero loop pulling or fraying'],
    badge: '5-Star Resort Grade'
  },
  {
    id: 'prod-05',
    category: 'medical',
    categoryName: 'Institutional & Medical',
    title: 'Autoclavable Hospital Scrubs & Barrier Drapes',
    tagline: 'Antimicrobial, bleach-safe fabrics for hospital systems and surgical centers',
    description: 'Medical grade poplin and micro-twill fabrics treated with antimicrobial finishes. Highly resistant to repeated high-temperature industrial autoclave wash cycles.',
    image: medicalFabricsImg,
    fallbackImage: medicalFabricsImg,
    specs: {
      composition: '65% Poly / 35% Cotton Poplin / CVC Blend',
      gsm: '145 – 190 GSM Poplin',
      finish: 'Antimicrobial, Chlorine Bleach Resistant, Fluid Barrier',
      sizes: 'XS – 4XL Unisex Scrubs & Surgical Drapes',
      colors: 'Ceil Blue, Hunter Green, Medical Navy, White',
      moq: '1,000 Sets',
      leadTime: '25–35 Days'
    },
    features: ['Withstands 75°C+ high-temperature sterilization', 'Fluid-repellent fluorocarbon barrier finish', 'Lint-free spun yarns for surgical cleanrooms', 'Silvadur antimicrobial protection'],
    badge: 'Medical Grade'
  },
  {
    id: 'prod-06',
    category: 'home',
    categoryName: 'Home Textiles',
    title: 'Luxury Window Curtains & Drapery Linens',
    tagline: 'Custom blackout, thermal-insulated, and decorative jacquard curtains & window drapery',
    description: 'Engineered for luxury residences, 5-star hotels, and commercial spaces. Crafted from premium 100% cotton canvas, textured jacquard, and blackout weaves with superior UV resistance, rich drape, and tailored eyelet or pinch-pleat finishing.',
    image: curtainsImg,
    fallbackImage: curtainsImg,
    specs: {
      composition: '100% Cotton Canvas / Textured Jacquard / Blackout Blend',
      gsm: '260 – 450 GSM Heavyweight Drapery',
      finish: 'Thermal Blackout, Anti-Static, Colorfast Reactive Dyeing',
      sizes: 'Custom Panel Drops (84", 96", 108") & Extra-Wide Roll Widths',
      colors: 'Navy Blue, Charcoal, Natural Greige, Olive, Custom Pantones',
      moq: '500 Panels / 1,000 Meters',
      leadTime: '25–35 Days'
    },
    features: [
      'Total light blocking & thermal energy efficiency',
      'Smooth, rich drape with weighted hem finish',
      'Custom eyelet, grommet, rod-pocket & pinch-pleat tailoring',
      'OEKO-TEX Standard 100 Certified safe dyes'
    ],
    badge: 'Home & Window Linens'
  }
];
