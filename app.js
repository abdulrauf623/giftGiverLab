const express = require("express");

const app = express();



app.get("/", async (req, res, next) => {

    res.status(200).json({ping: "pong"})
    
    
    })

module.exports = app

