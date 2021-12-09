const express = require('express')
const router = express.Router();

var {RecommendCaption} = require('../../models')

router.post('/', async function(req, res, next) {
    try {
        await RecommendCaption.create(req.body);
    }
    catch(err) {
        return res.status(200).json({
            error: err.message
        })
    }
    return res.status(200).json({status: 1})
})


module.exports = router;