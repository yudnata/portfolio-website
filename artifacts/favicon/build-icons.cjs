const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const outputDirectory = path.resolve(__dirname, '../../public/favicon');
const sourcePath = path.join(__dirname, 'pixel-head-source.png');

async function renderIcon(size, opaque = false) {
  const padding = Math.max(1, Math.round(size / 16));
  const background = opaque ? '#edf3f8' : '#00000000';
  return sharp(sourcePath)
    .trim()
    .resize(size - padding * 2, size - padding * 2, {
      fit: 'contain', kernel: 'nearest', background,
    })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background })
    .flatten(opaque ? { background } : false)
    .png()
    .toBuffer();
}

async function main() {
  await fs.mkdir(outputDirectory, { recursive: true });
  const sizes = [16, 32, 48];
  const icons = await Promise.all(sizes.map(async (size) => {
    const png = await renderIcon(size);
    await fs.writeFile(path.join(outputDirectory, `pixel-head-${size}.png`), png);
    return png;
  }));

  const header = Buffer.alloc(6 + sizes.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  icons.forEach((png, index) => {
    const entry = 6 + index * 16;
    header[entry] = sizes[index];
    header[entry + 1] = sizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  await fs.writeFile(path.resolve(outputDirectory, '../favicon.ico'), Buffer.concat([header, ...icons]));

  for (const [size, filename] of [[180, 'apple-touch-icon.png'], [192, 'pixel-head-192.png'], [512, 'pixel-head-512.png']]) {
    await fs.writeFile(path.join(outputDirectory, filename), await renderIcon(size, true));
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
