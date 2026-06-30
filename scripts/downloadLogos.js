import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'images', 'banks');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const banks = [
  { name: 'icici', url: 'https://en.wikipedia.org/wiki/Special:FilePath/ICICI_Bank_Logo.svg' },
  { name: 'axis', url: 'https://en.wikipedia.org/wiki/Special:FilePath/Axis_Bank_logo.svg' },
  { name: 'sbi', url: 'https://en.wikipedia.org/wiki/Special:FilePath/State_Bank_of_India_logo.svg' },
  { name: 'hdfc', url: 'https://en.wikipedia.org/wiki/Special:FilePath/HDFC_Bank_Logo.svg' },
  { name: 'baroda', url: 'https://en.wikipedia.org/wiki/Special:FilePath/BOB-New-Logo.svg' },
  { name: 'union', url: 'https://en.wikipedia.org/wiki/Special:FilePath/Union_Bank_of_India_Logo.svg' },
  { name: 'kotak', url: 'https://en.wikipedia.org/wiki/Special:FilePath/Kotak_Mahindra_Bank_logo.svg' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        // Follow redirect
        download(res.headers.location, dest).then(resolve).catch(reject);
      } else if (res.statusCode === 200) {
        let file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed with status code: ${res.statusCode} for ${url}`));
      }
    }).on('error', (err) => reject(err));
  });
}

async function run() {
  console.log('Downloading bank logos...');
  for (const bank of banks) {
    const dest = path.join(outDir, `${bank.name}.svg`);
    try {
      await download(bank.url, dest);
      console.log(`✅ Downloaded: ${bank.name}.svg`);
    } catch (err) {
      console.error(`❌ Failed to download ${bank.name}:`, err.message);
    }
  }
  console.log('Done!');
}

run();

