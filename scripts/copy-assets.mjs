import { mkdirSync, cpSync, existsSync } from 'fs';
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
