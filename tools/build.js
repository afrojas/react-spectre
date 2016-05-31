import 'colors';
import lib from './lib/build';
// import dist from './dist/build';

export default function Build() {
  return Promise.all([
    lib()
    // dist()
  ]);
}
