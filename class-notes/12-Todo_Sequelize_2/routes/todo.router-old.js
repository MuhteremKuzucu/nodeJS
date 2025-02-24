"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Routers

//const express = require('express')
const router = require('express').Router();

// Model
const Todo = require('../models/todo.model')

// List Todos:
router.get('/todo', async (req, res) => {

    const result = await Todo.findAll() // Select * From todos
    // findAndCountAll()

    res.send({
        error: false,
        result
    })
});

// Create Todo:
router.post('/todo', async (req, res) => {

    // const result = await Todo.create({
    //     title: "title-1",
    //     description: 'description-1',
    //     isDone: false,
    //     priority: 0
    // });

    const result = await Todo.create(req.body);

    res.send({
        error: false,
        result
    });
});

//TODO => READ - UPDATE - DELETE


// Read Todo:

router.get('/todo/:id', async (req, res)=>{

    //const result = await Todo.findOne({ where:{ id: req.params.id } });
    const result = await Todo.findByPk(req.params.id);

    res.status(202).send({
        error: false,
        result
    })
});


// Update Todo

router.put('/todo/:id', async (req, res)=> {

    //const result = await Todo.update({...newData},{...where})
    //const result = await Todo.update({title:'title-updated-5'}, { where: { id:5}})
    const result = await Todo.update(req.body , { where: { id: req.params.id}})

    res.status(202).send({
        error: false,
        result,
        new: await Todo.findByPk(req.params.id)
    })
});

// Delete Todo:

router.delete('/todo/:id', async (req, res) => {
    
    // await Todo.destroy({...where})
    const result = await Todo.destroy({ where: { id: req.params.id}})

    // res.status(204).send({
    //     error: false,
    //     result
    // })

    if (result) {
        res.sendStatus(204)

    } else {
        res.errorStatusCode = 404
        throw new Error('Delete is not succesful. Data is not found or already deleted.')
    }
})

module.exports = router;