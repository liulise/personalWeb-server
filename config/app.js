/**
 * Created by admin on 2018/1/27. 一月
 * yujie
 */

const path = require('path');
const express = require('express');

const app = express();
const route = require('../modules/route');
const staticUrl = path.resolve(__dirname, '../public');

app.use('/public', express.static(staticUrl));
route(app);

exports = module.exports = app;
