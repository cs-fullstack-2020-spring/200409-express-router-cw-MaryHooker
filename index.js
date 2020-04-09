//Express Router CW

//Create entry point
let express = require('express');
let app = express();

//variable for port number
let port = 2112;

//import router modules
let api = require('./routes/api.js');
let admin = require('./routes/admin.js');

//mount routes
app.use('/api',api);
app.use('/admin',admin);


//Listen on port
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

// //sanity
// app.get('/test',(req,res)=>{
//     res.send('Loud and Clear')
// })