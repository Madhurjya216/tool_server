const express = require('express');
const router = express.Router();
const Back = require("../Scheme/backScheme");
const Biceps = require("../Scheme/bicepScheme");
const Shoulder = require("../Scheme/shoulderScheme");
const Tricep = require("../Scheme/tricepScheme");
const Chest = require("../Scheme/chestScheme");
const Legs = require("../Scheme/LegScheme");


const getBack = async (req, res) => {
    try{
        const data = await Back.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}

const getChest = async (req, res) => {
    try{
        const data = await Chest.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}
const getLegs = async (req, res) => {
    try{
        const data = await Legs.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}
const getShoulder = async (req, res) => {
    try{
        const data = await Shoulder.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}
const getBiceps = async (req, res) => {
    try{
        const data = await Biceps.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}
const getTriceps = async (req, res) => {
    try{
        const data = await Tricep.find();
        if(data){
            res.json(data)
        } else{
            res.send("Facing an Error")
        }
    } catch (err){
        console.log("Error >>", err)
    }
}


module.exports = {getBack, getChest, getBiceps, getTriceps, getShoulder, getLegs};
