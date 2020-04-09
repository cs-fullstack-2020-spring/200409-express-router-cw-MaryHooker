//Express Router CW

//Create entry point
let express = require('express');
let app = express();

//variable for port number
let port = 2112;




//Listen on port
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

// //sanity
// app.get('/test',(req,res)=>{
//     res.send('Loud and Clear')
// })