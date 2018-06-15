'use strict';

/**
 * egg-passport-jwt default config
 * @member Config#passportJwt
 * @property {String} SOME_KEY - some description
 */
exports.passportJwt = {
  jwtSecret: 'adsfewwqwerfx/ewsfggadeww',
  jwtExpiresIn: 7200,
  authHeaderWithScheme: 'jwt',
  tokenBodyField: 'access_token',
  tokenQueryParameter: 'access_token',
};
