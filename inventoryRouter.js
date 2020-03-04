const express = require("express")
const inventory = express.Router()
const Inventory = require("../models/inventory")

inventory.route("/")

.get((req, res, next) => {
    Inventory.find((err, item) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

.post((req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(500).send(savedItem)
    })

})

inventory.route("/:itemId")


.delete((req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Deleted Item")
    })
})

.put((req, res, next) => {
    Inventory.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, (err, updatedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})

.get((req, res, next) => {
    Inventory.findOne({_id: req.params.itemId}, (err, item) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

module.exports = inventory


