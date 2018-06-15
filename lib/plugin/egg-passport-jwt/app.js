'use strict';

const debug = require('debug')('egg-passport-jwt');
const assert = require('assert');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = app => {
  const config = app.config.passportJwt;
  config.passReqToCallback = true;
  assert(
    config.jwtSecret,
    '[egg-passport-jwt] config.passportJwt.jwtSecret required'
  );
  config.secretOrKey = config.jwtSecret;
  config.jwtFromRequest = ExtractJwt.fromExtractors([
    ExtractJwt.fromAuthHeaderWithScheme(config.authHeaderWithScheme),
    ExtractJwt.fromBodyField(config.tokenBodyField),
    ExtractJwt.fromUrlQueryParameter(config.tokenQueryParameter),
  ]);

  // must require `req` params
  app.passport.use(
    'jwt',
    new Strategy(config, (req, jwt_payload, done) => {
      // format user
      const user = jwt_payload;
      user.provider = 'jwt';
      debug('%s %s get user: %j', req.method, req.url, user);

      // let passport do verify and call verify hook
      app.passport.doVerify(req, user, done);
    })
  );
};
