/**
 * Created by admin on 2018/3/24. 三月
 * yujie
 */

const { mongodb_path, mongodb_database } = require('../config/config');

const mongo = require('mongodb');

module.exports = new Promise(resolve =>
{
  mongo.connect(mongodb_path, (err, client) =>
  {
    if (err) { throw err; }

    resolve(client.db(mongodb_database));
  });
});
