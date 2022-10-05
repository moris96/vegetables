const mongoose = require('mongoose')

// Make a Schema 
const vegetableSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


// Make A Model From The Schema 

const Vegetable = mongoose.model('Vegetable', vegetableSchema)
// Export the Model for Use in the App 

module.exports = Vegetable