import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';
import outputFileSync from 'output-file-sync';

const DOCS_BASE = path.resolve(__dirname, '../', 'docs');
const SECTIONS_BASE = path.join(DOCS_BASE, 'sections');

chokidar
  .watch(`${SECTIONS_BASE}/**/*.example.js`, { ignored: /[\/\\]\./ })
  .on('all', (e, file) => {
    const raw = fs.readFileSync(file, { encoding: 'utf8' });
    const justSampleRaw = raw.match(/const SAMPLE = \(\{ __codeButton \}\) =>\n((.|\n|\s)*);\n\n.*/)[1].replace('{__codeButton}', '');

    const justFileName = file.split('/').pop();
    const exportName = justFileName.split('.').shift();
    const scriptRaw = `import ${exportName} from './${justFileName}';
export default ${exportName};

export const STRING = ${JSON.stringify(justSampleRaw)};`;

    const destination = file.replace('.example', '');
    outputFileSync(destination, scriptRaw, { encoding: 'utf8' });
  });