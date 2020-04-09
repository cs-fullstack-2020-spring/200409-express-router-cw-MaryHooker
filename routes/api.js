//API route

let express = require('express');
let router = express.Router();

router.get('/:item_id',(req,res)=>{
    res.send(`You attempted to view item ${req.params.item_id}`)
})

module.exports = router;