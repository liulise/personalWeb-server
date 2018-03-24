/**
 * Created by admin on 2018/1/27. 一月
 * yujie
 */
const mongo = require('../../../mongodb/index');
exports.index = (req, res, next) =>
{
  mongo.then(db =>
  {
    db.collection("users").findOne({})
      .then(user =>
      {
        console.log(user);
        res.send(user);
      })
      .catch(err => next(err));
  });
};
