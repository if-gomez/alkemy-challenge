const mongoose = require('mongoose');
const Post = require('../models/Posts');

const findPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post){
            next();
        }else{
            throw new Error;
        }
    } catch (err) {
        res.status(400).json(`Error: ${err}`)    
    }
};

module.exports = {findPostById};