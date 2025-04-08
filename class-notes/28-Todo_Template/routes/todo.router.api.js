"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Routers;

const router = require('express').Router();
const todo = require('../controllers/todo.controller.api');


router.route('/todo')
    .get(todo.list)
    .post(todo.create);

router.route('/todo/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete)

module.exports = router;