//requires
const express = require('express');

//global variables
var app = express();
var port = 5000;

//uses
app.use(express.static('server/public'));

//start up the server
app.listen(port, ()=>{
    console.log('listening on port: ' + port);
    
});