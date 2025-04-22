"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Blog = require('../models/blog');

module.exports = {

    list: async (req, res) =>{
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "List Blogs"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const result = await res.getModelList(Blog);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Blog),
            result
        });
    },

    create: async (req, res) =>{

         /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Blog"
                }
            }
        */

        const result = await Blog.create(req.body);

        res.status(201).send({
            error:false,
            result
        });
    },

    read: async (req, res) =>{
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Get Single Blog"
        */

        const result = await Blog.findById(req.params.id);

        res.status(200).send({
            error: false,
            result
        });
    },

    update: async (req, res) =>{
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Blog"
                }
            }
        */

        const result = await Blog.updateOne({_id: req.params.id}, req.body, {runValidators: true});

        res.status(202).send({
            error: false,
            result,
            new: await Blog.findById(req.params.id)
        });

    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */

        const result = await Blog.deleteOne({ _id: req.params.id });

        res.status(result.deletedCount ? 204 : 404).send({
            error: !result.deletedCount,
            message: result.deletedCount ? 'Data deleted.' : 'Data is not found or already deleted.',
            result
        });
    },

};