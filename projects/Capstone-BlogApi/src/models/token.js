"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
        index: true,
        unique: true
    },

    token:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },

}, {
    collection: 'tokens',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)