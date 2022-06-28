const express = require("express");

const morgan = require("morgan")

const app = express();

app.use(morgan("tiny"))

app.use(express.json())


const exchange = require("./routes/gift-exchange")


app.use('/gift-exchange', exchange)



app.get("/", async (req, res, next) => {

    res.status(200).json({ping: "pong"})
    
    
    })

module.exports = app

