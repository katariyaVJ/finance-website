const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'gst-return.jpg': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  'income-tax.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'pvt-ltd.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  'gumasta.jpg': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  'bookkeeping.jpg': 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80'
};

const assetsDir = path.join(__dirname, 'src', 'assets');

Object.entries(images).forEach(([filename, url]) => {
  const dest = path.join(assetsDir, filename);
  const file = fs.createWriteStream(dest);
  
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename} successfully.`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
});
