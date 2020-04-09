//Admin route

//create route
let express = require('express');
let router = express.Router(
);

//Read in CRUD
router.get('/:name',(req,res)=>{
    res.send(`Welcome back ${req.params.name}`)
})

//Delete in CRUD
router.delete('/user/:id',(req,res)=>{
    res.send(`You attempted to delete the user ${req.params.id}`)
})

//Update in CRUD
router.put('/user/:id',(req,res)=>{
    res.send(req.body);
})

//export module
module.exports = router;