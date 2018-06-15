'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/open-api.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/open-api-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, openApi')
      .expect(200);
  });
});
