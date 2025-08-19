import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Uso: pnpm new:rfc "Título da RFC"'); process.exit(1); }

const dir = path.join('docs','rfcs');
fs.mkdirSync(dir, { recursive: true });

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const date = new Date().toISOString().slice(0,10);
const files = fs.readdirSync(dir).filter(f => /^RFC-\d{4}-/.test(f));
const next = String(files.length + 1).padStart(4,'0');

const name = `RFC-${next}-${slug}.md`;
const filepath = path.join(dir, name);

const tpl = `# RFC-${next} — ${title}

**Autor:** @LuccaGianKolenez  
**Status:** Draft  
**Data:** ${date}

## Sumário
...

## Motivação
...

## Design
...

## Impactos
...

## Plano de rollout
...
`;
fs.writeFileSync(filepath, tpl);
console.log('✅ Criado:', filepath);