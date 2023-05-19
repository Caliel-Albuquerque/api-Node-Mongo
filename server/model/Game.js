const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    date:{
        type: String
    },
    image:{
        type: String
    }
}, {
    collection: 'games'
});

module.exports = mongoose.model('Game', Game);