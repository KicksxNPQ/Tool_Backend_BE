const mongoose = require('mongoose');

const Schema = mongoose.Schema

const captionSchema = new Schema({
    caption: {
        type: String
    },
    image_id: {
        type: Number
    },
    refVieCaptionId: {
        type: String
    }
});

const recommendCaptionSchema = new Schema({
    name: {
        type: String
    },
    studentID: {
        type: String
    },
    captions: [captionSchema]
})



module.exports = recommendCaptionSchema;
