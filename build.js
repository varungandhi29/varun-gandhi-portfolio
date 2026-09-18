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

console.log('Build completed successfully: index.html and public/ assets copied to dist/');
