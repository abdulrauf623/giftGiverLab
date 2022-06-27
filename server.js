const app = require("./app")

const exchange = require("./routes/gift-exchange")


app.use("/gift", exchange)


const port = process.env.PORT || 3000

const morgan = require("morgan")


app.use(morgan("tiny"))




app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})
