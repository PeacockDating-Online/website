import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const staticDir = path.join(rootDir, 'static');

await mkdir(staticDir, { recursive: true });
await cp(publicDir, staticDir, { recursive: true, force: true });

const cname = await readFile(path.join(rootDir, 'CNAME'), 'utf8');
await writeFile(path.join(staticDir, 'CNAME'), cname);
