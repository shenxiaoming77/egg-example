"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/controller/home.test.js', () => {
    it('should assert', function* () {
        const pkg = require('../../../package.json');
        bootstrap_1.assert(bootstrap_1.app.config.keys.startsWith(pkg.name));
        // const ctx = app.mockContext({});
        // yield ctx.service.xx();
    });
    it('should GET /', () => {
        return bootstrap_1.app.httpRequest()
            .get('/')
            .expect('hi, egg')
            .expect(200);
    });
});
//# sourceMappingURL=home.test.js.map