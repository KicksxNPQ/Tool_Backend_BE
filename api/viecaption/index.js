const express = require('express')
const router = express.Router();

var {VietnameseCaption} = require('../../models')

router.post('/', async function(req, res, next) {
    try {
        if (req.body.length !== 5) {
            throw {
                message: 'The data must be the length of 5'
            }
        }
        const viecaptions = await VietnameseCaption.findOne({},null).where('image_id', req.body[0].image_id).limit(1).exec();
        if (viecaptions && viecaptions.length === 1) {
            throw {
                message: 'This image label is set. Get the next image to label'
            }
        }
        await VietnameseCaption.create(req.body);
    }
    catch(err) {
        return res.status(200).json({
            error: err.message
        })
    }
    return res.status(200).json({status: 1})
})


router.get('/', async function(req,res,next) {
    try {
        let imageIdLists = await VietnameseCaption.aggregate([
            {
                $group:{
                    _id: "$image_id",
                    captions: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                "$sample": 
                { 
                    size: 20 
                }
            }
        ])
        return res.status(200).json({
            imageIdLists
        })
    }
    catch(err) {
        return res.status(200).json({
            error: err.message
        })
    }
})

module.exports = router;