#!/usr/bin/env node

'use strict';

const path = require('path');
const child_process = require('child_process');
require('../lib/ormconfig.js');

const root = process.cwd();

const typeormBin = path.resolve(root, './node_modules/.bin/typeorm');
const args = [
  typeormBin,
].concat(process.argv.slice(2));
child_process.spawn(process.argv[0], args, { stdio: 'inherit' });
