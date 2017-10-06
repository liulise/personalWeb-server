const models = require('./models');
const mongoose = require('mongoose');

for (const [name, val] of Object.entries(models))
{
  global.db.model(name, val);
}

module.exports = type =>  mongoose.model(type);


