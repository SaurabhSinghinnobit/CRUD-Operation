// mongo is ODM(Object document mapper)It will connect the javascript object to Mongodb database document.
const mongoose = require('mongoose');

// now Create a alien Schema.
// Required true hona chahiye agr name hai hi nhi toh vo save nhi hoga at perticuler collection where you want to save 
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    tech: {
        type: String,
        required: true
    },

    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

// Here we are exporting alienSchema.
module.exports = mongoose.model('Alien',alienSchema);

