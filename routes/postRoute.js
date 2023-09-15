const express = require('express');
const router = express.Router();
const Back = require("../Scheme/backScheme");
const Biceps = require("../Scheme/bicepScheme");
const Shoulder = require("../Scheme/shoulderScheme");
const Tricep = require("../Scheme/tricepScheme");
const Chest = require("../Scheme/chestScheme");
const Legs = require("../Scheme/LegScheme");

const backPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    try {
        if(!id || !name || !image || !category){
            res.status(401);
            res.send("Please enter all the fields!");
        } else {
            const res = await new Back({
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
            res.send("Successfully uploaded!");
            }
        }
    } catch (error) {
        console.log("Internal server error", error);
    }
}

const bicepsPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    try {
        if(!id || !name || !image || !category){
            res.status(401);
            res.send("Please enter all the fields!");
        } else {
            const res = await new Biceps({
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
            res.send("Successfully uploaded!");
            }
        }
    } catch (error) {
        console.log("Internal server error", error);
    }
}

const shoulderPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    try {
        if(!id || !name || !image || !category){
            res.status(401);
            res.send("Please enter all the fields!");
        } else {
            const res = await new Shoulder({
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
                res.send('Updated successfully!');
            }
        }
    } catch (error) {
        console.log("Internal server error", error);
    }
}

const tricepPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    if(!id || !name || !image || !category){
        res.status(401);
        res.send("Please enter all the fields!");
    } 
    try {
            const res = await new Tricep({
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
                res.send('Updated successfully!');
            }
    } catch (error) {
        console.log("Internal server error", error);
    }
}

const chestPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    if(!id || !name || !image || !category){
        res.status(401);
        res.send("Please enter all the fields!");
    } 
    try {
            const res = await new Chest({  
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
                res.send('Updated successfully!');
            }
    } catch (error) {
        console.log("Internal server error", error);
    }
}

const legPost = async (req, res) => {
    const {id, name, image, category} = req.body;
    if(!id || !name || !image || !category){
        res.status(401);
        res.send("Please enter all the fields!");
    } 
    try {
            const res = await new Legs({  
                id,
                name,
                image,
                category
            })
            const submitted = await res.save();
            if(submitted){
                res.send('Updated successfully!');
            }
    } catch (error) {
        console.log("Internal server error", error);
    }
}



module.exports = {backPost, bicepsPost, shoulderPost, tricepPost, chestPost, legPost};





