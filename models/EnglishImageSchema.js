const mongoose = require('mongoose');

const Schema = mongoose.Schema

const engImageSchema = new Schema({
    image_id: {
        type: Number
    },
    flickr_url: {
        type: String
    }
})


module.exports = engImageSchema;
