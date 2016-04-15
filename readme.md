# resolve-from-caller

> Resolve module paths relative to caller module file.

[![Travis Build Status](https://img.shields.io/travis/parro-it/resolve-from-caller.svg)](http://travis-ci.org/parro-it/resolve-from-caller)
[![NPM module](https://img.shields.io/npm/v/resolve-from-caller.svg)](https://npmjs.org/package/resolve-from-caller)
[![NPM downloads](https://img.shields.io/npm/dt/resolve-from-caller.svg)](https://npmjs.org/package/resolve-from-caller)

# Installation

```bash
npm install --save resolve-from-caller
```

# Usage

lib/index.js:

```js
  const resolve = require('resolve-from-caller');
  console.log(resolve('./a'));
  //-> a.js
```

user-land.js:

```js
  const lib = require('./lib');
  
```

a.js:

```js
  // anything
```


# Credits

This module begin as a PR to [module-resolve-as-caller](https://github.com/fengb/module-resolve-as-caller).

# License

The MIT License (MIT)

Copyright (c) 2016 Andrea Parodi
