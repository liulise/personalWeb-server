/**
 * Created by admin on 2018/1/27. 一月
 * yujie
 */

const path = require('path');
const express = require('express');
const app = express();
const static = path.resolve(__dirname, '../public');

app.use('/public', express.static(static));

app.use(() =>
{
  console.log(static);
});

exports.listen = (...args) =>
{
  console.log('listen');
  app.listen.apply(app, args);
};
