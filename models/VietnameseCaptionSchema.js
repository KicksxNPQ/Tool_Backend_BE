const mongoose = require('mongoose');

const Schema = mongoose.Schema

const vieCaptionSchema = new Schema({
    image_id: {
        type: Number
    },
    caption: {
        type: String
    }

})

vieCaptionSchema.method('saveMany', function(obj) {
    }
)

module.exports = vieCaptionSchema;
