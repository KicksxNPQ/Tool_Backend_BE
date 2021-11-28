const mongoose = require('mongoose');

const Schema = mongoose.Schema

const engCaptionSchema = new Schema({
    image_id: {
        type: Number
    },
    id: {
        type: Number
    },
    caption: {
        type: String
    }

})

engCaptionSchema.method('saveMany', function(obj) {
    }
)

module.exports = engCaptionSchema;
