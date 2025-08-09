const express = require('express');
const userRouter = express.Router();

// Controllers
const { getHomes } = require('../controllers/homes');

// Homepage showing registered homes
userRouter.get("/", getHomes);

module.exports = userRouter;
