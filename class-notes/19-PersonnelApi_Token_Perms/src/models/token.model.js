"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection');
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Personnel',
        required: true,
        index: true
    },

    token: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    }

},{ timestamps:true, collection:'tokens' })



/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)