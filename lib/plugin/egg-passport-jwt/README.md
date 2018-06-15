# egg-passport-jwt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-jwt.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-jwt
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-jwt.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-jwt
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-jwt.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-jwt?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-jwt.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-jwt
[snyk-image]: https://snyk.io/test/npm/egg-passport-jwt/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-jwt
[download-image]: https://img.shields.io/npm/dm/egg-passport-jwt.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-jwt

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-jwt --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportJwt = {
  enable: true,
  package: 'egg-passport-jwt',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportJwt = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
