'use strict';
const path = require('path');
const fs = require('fs');

function requireConfig(name) {
  const configPath = path.resolve(process.cwd(), `./config/config.${name}.js`);
  if (!fs.existsSync(configPath)) { return {}; }
  let config = require(configPath);
  // FIXME: config init with function need send appInfo argument.
  if ((typeof config) === 'function') { config = config({}); }
  if ((typeof config) === 'object' && (typeof config.default) === 'function') { config = config.default({}); }
  return config.typeorm || {};
}
// EGG_SERVER_ENV=prepub npm run migrate:up
// When EGG_SERVER_ENV is not local or unittest, set it production by default.
const serverEnv = process.env.EGG_SERVER_ENV || 'local';

const defaultConfig = requireConfig('default');
const serverConfig = requireConfig(serverEnv);

const clients = Object.assign({}, defaultConfig, serverConfig).clients;
const ormconfig = [];
for (const key in clients) {
  const connection = clients[key];
  connection.name = key;
  delete connection.ready;
  ormconfig.push(connection);
}
console.log('开始生成ormconfig...');

fs.writeFile(path.resolve(process.cwd(), 'ormconfig.js'), `'use strict';
// 命令行自动生成，不要手动修改
module.exports = ${JSON.stringify(ormconfig)};
`);
console.log('生成ormconfig成功');
