# React-Spectre [![npm version](https://badge.fury.io/js/react-spectre.svg)](https://badge.fury.io/js/react-spectre)
React components for [Spectre.css](https://github.com/picturepan2/spectre)

_**Hyper-alpha**. I wouldn't really use it yet if I were you... but more to come soon. Promise!_ :heart_eyes:

## Developement

### Playing With NPM Package

The NPM package will look for `lib/index.js`, which generally doesn't exist. So to transpile and watch `src` and build the NPM package, run:

```
npm run watch-lib
```

Now any changes made within `src` are picked up and the NPM package is rebuilt.

In order to play with the development version of the NPM package, run this *once* whithin this project's root directory:

```
npm link
```

This will make `react-spectre` available to install in other, local, projects. In said other project's root directory, run:

```
npm link react-spectre
```

And booooooooom. Now, assuming you're running `watch-lib` as described above, any changes you make in `src` will rebuild the NPM package and picked up by whatever build process you're using in your projects using `react-spectre`.

### Playing With Browser Version

To build a version of `react-spectre` ready for use within a browser environment, run:

```
npm run watch-dist
```

This will watch for any changes within `src` and rebuild the browser-ready version and place it within `dist/react-spectre.js` which can then be copied or referenced directly however you see fit.

### Playing With Docs

To run the docs, run:

```
npm run watch-docs
```

Then visit [localhost:9000](http://localhost:9000/) and go to town.