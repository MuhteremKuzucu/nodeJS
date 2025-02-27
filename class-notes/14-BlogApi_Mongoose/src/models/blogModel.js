"use strict";
/* ----------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------ */

const mongoose = require('mongoose');


/* ---------------------------------------------- */

//* BlogCategorySchema

//Create Schema
const blogCategorySchema = new mongoose.Schema({

    //_id
    name:{
        type: String,
        trim: true,
        required:true
    }
},{
    collection:'blogCategories'
});

//Set Model
const BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);

/* ------------------------------------------------------- */

//* BlogPost Schema

const blogPostSchema = new mongoose.Schema({
    
    //_id

    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true
    },

    title:{
        type: String,
        trim: true,
        required:true
    },
    content:{
        type: String,
        trim: true,
        required:true
    },

    //createdAt
    //updatedAt

},{
    collection: 'blogPost',
    timestamps: true
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);



module.exports = {BlogCategory, BlogPost}

