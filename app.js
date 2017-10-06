const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
// const upload = require('multer')();        // 上传文件时
const bodyParse = require('body-parser');
const sessionParse = require('express-session');
const app = express();

global.db = mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});
global.getModel = require('./common/getModel');

app.use(sessionParse({
  resave: false,                                  //添加这行
  saveUninitialized: true,                        //添加这行
  secret: 'myBlog',
  key: 'myBlog',
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 30
  }
}));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

module.exports = app;