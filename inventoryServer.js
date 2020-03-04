const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bountydb', 
{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
},
() => console.log("connected to db")
)


app.use("/inventory", require("../routes/inventoryRouter"))

app.listen(9001, () => {
    console.log("running port " + 9001)
})
