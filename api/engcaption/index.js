const express = require('express')
const router = express.Router();

var {EnglishCaption} = require('../../models')
var engCaption = new EnglishCaption();

router.post('/', async function(req, res, next) {
    try {
        if (!Array.isArray(req.body)) 
            throw {
                message: 'Data must be an array'
            }
        await EnglishCaption.create(req.body);
    }
    catch(err) {
        return res.status(200).json({
            error: err.message
        })
    }
    return res.status(200).json({status: 1})
})

module.exports = router;