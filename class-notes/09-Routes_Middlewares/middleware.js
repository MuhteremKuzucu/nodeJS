'use strict';

/*---------------------------------------------------*
                EXPRESSJS - MIDDLEWARES
/*---------------------------------------------------*/

const express = require('express');
const app = express()

require('dotenv').config();
const PORT = process.env.PORT;
/*---------------------------------------------------*
//? Middleware functions must has three parameters.
//? Last parameter is for next().

// Route-Middleware
app.get('/', (req, res, next) => {

    console.log('Middlware started.');
    next();
});

// Route-Path;
app.get('/', (req, res) => {

    console.log('Route started');

    res.send({
        message: "Hello Cohort DE-10"
    })
});

/*---------------------------------------------------*

// Sending data from middleware to others routes.
app.get('/', (req, res, next) => {

    if (req.query.username) {
        req.username = req.query?.username
        next()
    } else {
        res.send({
            message: 'username is required'
        })
    }
});

// Route
app.get('/', (req, res) => {

    res.send({
        message: "Hello " + req.username
    })
});

/*---------------------------------------------------*

app.get('/', (req, res, next) => {
    req.message1 = 'middleware-1 started.'
    next()
})
app.get('/', (req, res, next) => {
    req.message2 = 'middleware-2 started.'
    next()
})
app.get('/', (req, res, next) => {
    req.message3 = 'middleware-3 started.'
    next()
})
app.get('/', (req, res, next) => {
    req.message4 = 'middleware-4 started.'
    next()
})

app.get('/', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4
    })
})
/*---------------------------------------------------*

const middleFn1 = (req, res, next) => {
    console.log('middleware function 1 started.');
    next()
};

const middleFn2 = (req, res, next) => {
    console.log('middleware function 2 started.');
    next()
};

//? use middlewares function;
// app.use(middleFn1)
// app.use(middleFn2)

//* Altarnative:
// app.use(middleFn1,middleFn2)
// app.use([middleFn1, middleFn2])

// app.post('/abc', middleFn1, middleFn2 ,(req, res) => {
//     console.log('this is from route');
//     res.send({
//         message: 'Hello cohort DE-10'
//     })
// })

app.get('/abc', middleFn1) // only '/abc' and only get
app.use('/abc', middleFn2) // only '/abc' and all methods

app.post('/abc', (req, res) => {
    console.log('this is from route');
    res.send({
        message: 'Hello cohort DE-10'
    })
})
/*---------------------------------------------------*/
//? Import from other file

const { middleFn1, middleFn2 } = require('./middlewares') // in object
app.use(middleFn1, middleFn2)

app.post('/abc', (req, res) => {
    console.log('this is from route');
    res.send({
        message: 'Hello cohort DE-10'
    })
});


/*---------------------------------------------------*/
app.listen(PORT, () => console.log('Running at: http://127.0.0.1:' + PORT));