const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    BountyAmount: Number,
    type: String,
    living: Boolean,
})

module.exports = mongoose.model("invenotryModel", inventorySchema)