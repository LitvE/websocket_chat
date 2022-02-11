const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
//const db = require('./../config/db');
const mode = process.env.NODE_ENV || 'development';
const config = require('./../config/db')[mode];
const basename = path.basename(__filename);

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`);

const db = {};

const fileReg = /^[^.].*?\.js$/;

fs.readdirSync(__dirname)
  .filter((file) => fileReg.test(file) && file !== basename)
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

db.mongoose = mongoose;

module.exports = db;