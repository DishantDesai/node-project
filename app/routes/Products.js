const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:'GET Method'
    });
});

router.post('/',(req,res,next) => {
    product = {
        name:req.body.name,
        price:req.body.price,
    }
    res.status(200).json({
        message:'POST Method',
        product:product

    });
});

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    if(id === 'work'){
        res.status(200).json({
            message:'work id',
            id:id
        })
    }
    else{
        res.status(200).json({
            message:'Simple id',
            id:id
        })
    }
})

module.exports = router