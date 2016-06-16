import exec from '../exec';

export default function BuildDocs(options) {
  if (options.docsOnly || options.includeDocs) {
    console.log('Building: '.cyan + 'docs'.green);

    return Promise.all([
      exec.exec('SPECTRE_DOCS=true webpack --bail'),
      exec.exec('SPECTRE_DOCS=true webpack --bail -p')
    ])
    .then(() => console.log('Built: '.cyan + 'docs'.green));
  }
}