const express = require('express')
const router = express.Router();

var {EnglishImage, EnglishCaption, VietnameseCaption} = require('../../models')
// var engImage = new EnglishImage();

router.get('/', async function(req,res,next) { 
    try {
        // const viecaptions = await VietnameseCaption.findOne({},null).sort({image_id:-1}).limit(1).exec();
        // let max_image_id = 0;
        // if (viecaptions !== null) 
        //     max_image_id = viecaptions.image_id; 
        // const engcaptions = await EnglishCaption.find({},null).gt('image_id', max_image_id).sort({image_id: 1}).limit(5).exec();
        // if (engcaptions.length === 0) {
        //     return res.status(200).json({
        //         image: null,
        //         captions: []
        //     });
        // }
        // console.log(engimages);
        const engcaptionstmp = await EnglishCaption.aggregate([
            {
                "$lookup": {
                    from: 'vietnamesecaptions',
                    localField: 'image_id',
                    foreignField: "image_id",
                    as: 'tt',
                },
            },
            // {"$unwind": "$tt"},
            {
                $project: 
                    {image_id:1, caption:1, tt:1, 
                     size_of_tt: {$size: "$tt"}
                }
            },
            {
                "$match": {
                    "size_of_tt": {
                        $lt: 1
                    }
                }
            },
            { 
                "$sample": 
                { 
                    size: 1 
                } 
            }
        ]);
        if (!engcaptionstmp) {
            return res.status(200).json({
                errors: "No caption"
            })
        }
        const engcaptions = await EnglishCaption.find({'image_id': engcaptionstmp[0].image_id}).limit(5).exec();
        const engimages = await EnglishImage.findOne({}, null).where('image_id', engcaptions[0].image_id).exec();
        return res.status(200).json({
            image: engimages,
            captions: engcaptions
        });
    }
    catch(err) {
        return res.status(200).json({
            errors: err.message
        })
    }
})

module.exports = router;