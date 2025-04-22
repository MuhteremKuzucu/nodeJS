"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Comment = require('../models/comment');

module.exports = {

    list: async (req, res) =>{
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "List Comments"
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

        const result = await res.getModelList(Comment);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Comment),
            result
        });
    },

    create: async (req, res) =>{

         /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Create Comment"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Comment"
                }
            }
        */

        const result = await Comment.create(req.body);

        res.status(201).send({
            error:false,
            result
        });
    },

    read: async (req, res) =>{
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Get Single Comment"
        */

        const result = await Comment.findById(req.params.id);

        res.status(200).send({
            error: false,
            result
        });
    },

    update: async (req, res) =>{
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Update Comment"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Comment"
                }
            }
        */

        const result = await Comment.updateOne({_id: req.params.id}, req.body, {runValidators: true});

        res.status(202).send({
            error: false,
            result,
            new: await Comment.findById(req.params.id)
        });

    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Delete Comment"
        */

        const result = await Comment.deleteOne({ _id: req.params.id });

        res.status(result.deletedCount ? 204 : 404).send({
            error: !result.deletedCount,
            message: result.deletedCount ? 'Data deleted.' : 'Data is not found or already deleted.',
            result
        });
    },

};