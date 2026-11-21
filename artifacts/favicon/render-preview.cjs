const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

async function main() {
  const icon = fs.readFileSync(path.join(__dirname, 'yudnata.svg'));
  const canvas = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="440" viewBox="0 0 960 440">
    <rect width="960" height="440" fill="#f0f1f3"/>
    <text x="48" y="57" fill="#121821" font-family="Arial, sans-serif" font-size="19" font-weight="700">YUDNATA / PIXEL Y</text>
    <text x="48" y="389" fill="#68717d" font-family="Arial, sans-serif" font-size="14">Monogram favicon concept</text>
    <text x="348" y="113" fill="#68717d" font-family="Arial, sans-serif" font-size="14">BROWSER TAB</text>
    <rect x="348" y="131" width="564" height="174" rx="12" fill="#ffffff"/>
    <path d="M360 131h540q12 0 12 12v43H348v-43q0-12 12-12" fill="#22252b"/>
    <path d="M360 186v-28q0-12 12-12h246q12 0 12 12v28" fill="#373c44"/>
    <text x="400" y="172" fill="#eff2f6" font-family="Arial, sans-serif" font-size="13">Yudnata - Portfolio</text>
    <path d="m604 160 8 8m0-8-8 8" stroke="#b8c0cb" stroke-width="1.5"/>
    <rect x="367" y="202" width="526" height="33" rx="16" fill="#f0f1f3"/>
    <text x="388" y="224" fill="#5a626c" font-family="Arial, sans-serif" font-size="13">yudnata.tech</text>
    <text x="368" y="275" fill="#858c96" font-family="Arial, sans-serif" font-size="13">16 px in the tab</text>
    <text x="348" y="348" fill="#68717d" font-family="Arial, sans-serif" font-size="14">ACTUAL ICON SIZES</text>
    <text x="375" y="386" fill="#858c96" font-family="Arial, sans-serif" font-size="12">16</text>
    <text x="457" y="386" fill="#858c96" font-family="Arial, sans-serif" font-size="12">32</text>
    <text x="565" y="386" fill="#858c96" font-family="Arial, sans-serif" font-size="12">48</text>
  </svg>`);
  const placements = [
    { size: 224, left: 48, top: 113 },
    { size: 16, left: 376, top: 156 },
    { size: 16, left: 348, top: 372 },
    { size: 32, left: 412, top: 360 },
    { size: 48, left: 500, top: 352 },
  ];
  const layers = await Promise.all(placements.map(async ({ size, left, top }) => ({
    input: await sharp(icon, { density: 384 }).resize(size, size).png().toBuffer(), left, top,
  })));
  await sharp(canvas).composite(layers).png().toFile(path.join(__dirname, 'preview.png'));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
