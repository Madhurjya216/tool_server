const express = require("express");
const mongoose = require("mongoose");

const dbConnection = () => {
    const connect = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
    try {
        mongoose.connect('mongodb+srv://monogodb:root@cluster0.wckxzy4.mongodb.net/workoutGenerator?retryWrites=true&w=majority', connect)
        .then((res) => {
            if(res){
                console.log("Successfully connected!");
            } else {
                console.log("Failed to connect");
            }
        })
    } catch (error) {
        console.log("Error connecting >>>", error);
    }
}

module.exports = dbConnection;