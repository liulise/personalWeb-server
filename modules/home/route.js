/**
 * Created by admin on 2018/3/11. 三月
 * yujie
 */

const express = require('express');
const subRouter = express.Router();
const controller = require('./controllers/modules_home_controller');

module.exports = subRouter;

subRouter.get('/index', controller.index);
