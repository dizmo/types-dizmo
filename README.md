[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes-dizmo.svg)](https://npmjs.org/package/@dizmo/types-dizmo)
[![Build Status](https://travis-ci.org/dizmo/types-dizmo.svg?branch=master)](https://travis-ci.org/dizmo/types-dizmo)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types-dizmo/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types-dizmo?branch=master)

# @dizmo/types-dizmo
Library module.

## Usage
### Install
```sh
npm install @dizmo/types-dizmo --save
```
### Require
```javascript
let lib = require('@dizmo/types-dizmo');
```
### Examples
```typescript
import Dizmo from '@dizmo/types-dizmo'
```
```typescript
declare const dizmo: Dizmo;
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [Hasan Karahan](https://github.com/hsk81)
