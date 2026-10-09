import fs from 'fs';
import path from 'path';

// Let's check all jsx files in src
const srcDir = './src';
const files = [];

function getFiles(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      getFiles(full);
    } else if (full.endsWith('.jsx')) {
      files.push(full);
    }
  }
}

getFiles(srcDir);

console.log('Checking JSX files for missing identifiers:');
let hasError = false;

for (const f of files) {
  const code = fs.readFileSync(f, 'utf8');
  // Check lucide icon usages <IconName
  const tags = [...code.matchAll(/<([A-Z][a-zA-Z0-9]+)/g)].map(m => m[1]);
  // Standard React / HTML or Page tags
  const standard = new Set(['React', 'Fragment', 'Link', 'Route', 'Routes', 'Navigate', 'BrowserRouter', 'ScrollToTop', 'Topbar', 'Navbar', 'Footer', 'MobileStickyBar', 'Hero', 'TrustStrip', 'BrandPositioning', 'KitchenShowcase', 'BathroomShowcase', 'FullHomeShowcase', 'AdditionsShowcase', 'CommercialShowcase', 'PortfolioGrid', 'BeforeAfterSlider', 'ProcessSection', 'ReviewsSection', 'ServiceAreas', 'AboutSection', 'EstimateSection', 'EstimateModal', 'HomePage', 'KitchenRemodelingPage', 'BathroomRemodelingPage', 'FullHomeRemodelingPage', 'HomeAdditionsPage', 'CommercialRemodelingPage', 'ServiceAreasPage']);
  
  for (const tag of tags) {
    if (!standard.has(tag)) {
      // Must be imported or defined in code
      const importRegex = new RegExp(`\\b${tag}\\b`);
      // Check if it's imported
      const hasImport = code.includes(` ${tag} `) || code.includes(` ${tag},`) || code.includes(`, ${tag}`) || code.includes(`{ ${tag} }`) || code.includes(`const ${tag}`) || code.includes(`function ${tag}`);
      if (!hasImport) {
        console.error(`MISSING in ${f}: <${tag}> is used but NOT imported!`);
        hasError = true;
      }
    }
  }
}

if (!hasError) {
  console.log('All JSX tags properly imported across all files!');
}
