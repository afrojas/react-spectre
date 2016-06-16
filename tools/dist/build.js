import exec from '../exec';
import { distRoot } from '../constants';

export default function BuildDistributable(options) {
  if (options.docsOnly) return;
  console.log('Building: '.cyan + 'distributable'.green);

  return exec.exec(`rimraf ${distRoot}`)
    .then(() => Promise.all([
      exec.exec('webpack --bail'),
      exec.exec('webpack --bail -p')
    ]))
    .then(() => console.log('Built: '.cyan + 'distributable'.green));
}