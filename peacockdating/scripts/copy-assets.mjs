import { mkdirSync, cpSync, existsSync, copyFileSync } from 'fs';
import { join } from 'path';

const from = join(process.cwd(), 'public', 'images');
const to = join(process.cwd(), 'static', 'images');

if (!existsSync(from)) {
  console.log('No public/images directory found, skipping copy.');
  process.exit(0);
}
mkdirSync(to, { recursive: true });
cpSync(from, to, { recursive: true });
console.log('Copied images to static/images');

// Also copy root CNAME if present one directory up (for gh-pages custom domain persistence)
try {
  const rootCname = join(process.cwd(), '..', 'CNAME');
  const target = join(process.cwd(), 'static', 'CNAME');
  if (existsSync(rootCname)) {
    copyFileSync(rootCname, target);
    console.log('Copied CNAME into static/ for deployment');
  }
} catch (e) {
  console.warn('CNAME copy skipped:', e.message);
}
