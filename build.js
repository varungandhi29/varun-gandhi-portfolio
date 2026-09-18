import fs from 'fs';
import path from 'path';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copy index.html to dist/index.html
fs.copyFileSync('index.html', path.join('dist', 'index.html'));

// Copy public directory to dist if it exists
if (fs.existsSync('public')) {
  fs.cpSync('public', 'dist', { recursive: true });
}

// Copy css and js directories to dist
for (const dir of ['css', 'js']) {
  if (fs.existsSync(dir)) {
    fs.cpSync(dir, path.join('dist', dir), { recursive: true });
  }
}

console.log('Build completed successfully: index.html, public/, css/, and js/ copied to dist/');
