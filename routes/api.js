//API route

//Create a router
let express = require('express');
let router = express.Router();

//Read in CRUD
router.get('/:item_id',(req,res)=>{
    res.send(`You attempted to view item ${req.params.item_id}`);
});

//Read in CRUD
router.get('/',(req,res)=>{
    res.send(`You attempted to view all items`);
});

//Create in CRUD
router.post('/',(req,res)=>{
    res.send(req.body);
});

module.exports = router;