/**
 * Created by admin on 2018/3/11. 三月
 * yujie
 */

// all routes
const home = require('./home/route');

module.exports = app =>
{
  app.use((req, res, next) => { console.log('module', req.url); next(); });
  app.get('/key', (req, res) => { res.json({ a: 456 }); });
  app.use('/home', home);
};
