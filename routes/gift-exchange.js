const express = require("express")

const giftExchange = express.Router()



giftExchange.post("/traditional", async (req, res, next) => {

res.status(200).json({names : ["Abdul", "Rauf", "Abdul", "Karim"]})



})


giftExchange.post("/pairs", async(req, res, next) => {


res.status(200).json({names : ["Abdul", "Rauf", "Abdull", "Karim", "Standard"]})

})



module.exports = giftExchange