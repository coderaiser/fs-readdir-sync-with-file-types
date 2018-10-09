fs-readdir-sync-with-file-types [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]
=========
Node.js v10.10.0 [fs.readdirSync](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_readdirsync_path_options) [ponyfill](https://ponyfill.com) of `withFileTypes` option.

`options.withFileTypes` is always set to true and result contain objects similar to [fs.Dirent](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_class_fs_dirent).

## Install

```
npm i fs-readdir-sync-with-file-types
```

## API

- `path` `<string> | <Buffer> | <URL>`

Returns: <fs.Dirent[]>

Example:

```js
const readdirSync = require('fs-readdir-sync-with-file-types');

readdirSync('.');
// returns on node v10.10
Dirent { name: 'LICENSE', [Symbol(type)]: 1 },
Dirent { name: 'README.md', [Symbol(type)]: 1 },
Dirent { name: 'index.js', [Symbol(type)]: 1 },

// returns on node < v10.10

{ name: 'LICENSE',
isBlockDevice: [Function: bound ],
isCharacterDevice: [Function: bound ],
isDirectory: [Function: bound ],
isFIFO: [Function: bound ],
isFile: [Function: bound ],
isSocket: [Function: bound ],
isSymbolicLink: [Function: bound ] },

{ name: 'README.md',
isBlockDevice: [Function: bound ],
isCharacterDevice: [Function: bound ],
isDirectory: [Function: bound ],
isFIFO: [Function: bound ],
isFile: [Function: bound ],
isSocket: [Function: bound ],
isSymbolicLink: [Function: bound ] },

{ name: 'index.js',
isBlockDevice: [Function: bound ],
isCharacterDevice: [Function: bound ],
isDirectory: [Function: bound ],
isFIFO: [Function: bound ],
isFile: [Function: bound ],
isSocket: [Function: bound ],
isSymbolicLink: [Function: bound ] }
```

## Related

- [fs-copy-file](https://github.com/coderaiser/fs-copy-file "fs-copy-file") - Asynchronously copies src to dest.
- [fs-copy-file-sync](https://github.com/coderaiser/fs-copy-file-sync "fs-copy-file-sync") - Synchronously copies src to dest.

## License
MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/fs-readdir-sync-with-file-types.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/fs-readdir-sync-with-file-types/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/fs-readdir-sync-with-file-types.svg?style=flat&longCache=true
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/fs-readdir-sync-with-file-types/badge.svg?branch=master&service=github
[NPMURL]:                   https://npmjs.org/package/fs-readdir-sync-with-file-types "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/fs-readdir-sync-with-file-types  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/fs-readdir-sync-with-file-types "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]:              https://coveralls.io/github/coderaiser/fs-readdir-sync-with-file-types?branch=master

