import 'colors';
import yargs from 'yargs';
import build from './build';

const argv = yargs
  .option('docs-only', {
    demand: false,
    default: false
  })
  .option('include-docs', {
    demand: false,
    default: false
  }).argv;

build(argv)
  .catch(err => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });
