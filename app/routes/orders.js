const express = require('express')
const router = express.Router();

router.post('/',(req,res)=>{
    res.status(201).json({
        message:'Order Created'
    })
})

router.get('/:id',(req,res)=>{
    res.status(200).json({
        message:'Order Fetched With '+req.params.id
    })
})

module.exports = router;