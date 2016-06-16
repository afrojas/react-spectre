import 'colors';
import lib from './lib/build';
import dist from './dist/build';
import docs from './docs/build';

export default function Build(options) {
  return Promise.all([
    lib(options),
    dist(options),
    docs(options)
  ]);
}
