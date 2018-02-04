/**
 * Created by admin on 2018/1/27. 一月
 * yujie
 */

const path = require('path');
const express = require('express');

const app = express();
const staticUrl = path.resolve(__dirname, '../public');

app.use('/public', express.static(staticUrl));
app.use((req, res) =>
{
  res.writeHead(404);
  res.end();
});

exports.listen = (...args) =>
{
  console.log('listen');
  app.listen.apply(app, args);
};
