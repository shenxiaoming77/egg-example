'use strict';

require('reflect-metadata');
const assert = require('assert');
const typeorm = require('typeorm');
const DirectoryExportedClassesLoader = require('typeorm/util/DirectoryExportedClassesLoader');
const OrmUtils = require('typeorm/util/OrmUtils');

let count = 0;

module.exports = app => {
  if (app.config.typeorm.app) {
    app.beforeStart(async function() {
      if (app.config.typeorm.clients) {
        app.typeorm = {};
        for (const id in app.config.typeorm.clients) {
          app.typeorm[id] = await createOneClient(
            id,
            app.config.typeorm.clients[id],
            app
          );
          if (app.config.typeorm.clients[id].ready instanceof Function) {
            await app.config.typeorm.clients[id].ready(app);
            app.coreLogger.info('[egg-typeorm] ready function called');
          }
        }
      } else {
        app.typeorm = await createOneClient(
          'default',
          app.config.typeorm.client,
          app
        );
        if (app.config.typeorm.client.ready instanceof Function) {
          await app.config.typeorm.client.ready(app);
          app.coreLogger.info('[egg-typeorm] ready function called');
        }
      }
    });
  }
};

async function createOneClient(connectionName, config, app) {
  assert(
    config.type &&
      config.host &&
      config.port &&
      config.username &&
      config.database,
    `[egg-typeorm] 'type: ${config.type}', 'host: ${config.host}', 'port: ${
      config.port
    }', 'user: ${config.username}', 'database: ${
      config.database
    }' are required on config`
  );

  app.coreLogger.info(
    '[egg-typeorm] connecting %s %s@%s:%s/%s',
    config.type,
    config.username,
    config.host,
    config.port,
    config.database
  );

  config.name = connectionName;
  const connection = await typeorm.createConnection(config, {
    charset: 'utf8mb4',
  });
  const [
    entityClasses,
    entityDirectories,
  ] = OrmUtils.OrmUtils.splitClassesAndStrings(config.entities || []);
  const allEntityClasses = [
    ...entityClasses,
    ...DirectoryExportedClassesLoader.importClassesFromDirectories(
      entityDirectories
    ),
  ];
  const model = {};
  for (let i = 0; i < allEntityClasses.length; i++) {
    const element = allEntityClasses[i];
    element.useConnection(connection);
    model[element.name] = element;
  }

  // if (app.config.env === 'local') {
  //   connection.synchronize();
  // }

  app.beforeStart(function* () {
    const rows = yield connection.manager.query('select 1 as column1;');
    const index = count++;
    app.coreLogger.info(
      `[egg-typeorm] instance[${index}] status OK, typeorm result: ${
        rows[0].column1
      }`
    );
  });
  if (config.entities) {
    return await model;
  }
  return connection;
}
