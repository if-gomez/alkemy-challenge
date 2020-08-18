const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Posts');

const getAllPosts = async(req, res) => {
    try {
        const post = await Post.find();
        if(post){
            res.status(200).json(post);
        }else{
            throw new Error;
        }
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
};

const getPostById = async(req, res) => {
    const {id} = req.params;
    try {
        const post = await Post.findById(id);
        if(post){
            res.status(200).json(post);
        }else{
            res.status(404).json("Post not found");
        }
    } catch (err) {
        res.status(404).json(`Error: ${err}`)
    }
};

const addPost = async(req, res) => {
    const {title, content} = req.body;

    const newPost = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        content: content
    });
    console.log(newPost);
    try {
        const post = await newPost.save();
        if(post){
            res.status(201).json(`Post agregado`)
        }else{
            throw new Error;
        }
    } catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
};

const modifyPost = async(req, res) => {
    const {id} = req.params;
    
    try {
        const post = await Post.update({_id: id}, req.body);
        if(post){
            res.status(200).json("Post actualizado");
        }else{
            throw new Error;
        }
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
};

const deleteAllPost = async(req, res) => {
    try {
        const deleted = await Post.remove({});
        if(deleted){
            res.status(200).json("Todos los posts fueron eliminados");
        }else{
            throw new Error;
        }
    } catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
};

const deleteById = async(req, res) => {
    try {
        const {id} = req.params;
        const postDeleted = await Post.remove({_id: id})
        if(postDeleted){
            res.status(200).json(`Producto eliminado`);
        }
    } catch (err) {
        res.status(400).json(`Erorr: ${err}`);
    }
};

module.exports = {getAllPosts, getPostById, addPost, modifyPost, deleteAllPost, deleteById};