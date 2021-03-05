const express = require("express"); // use Express
const bodyParser = require("body-parser"); // for parsing POST requests
const app = express(); // create application
const port = 3000; // port for listening
 
// It's necessary for parsing POST requests
// the line below is used for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// return static pages from the "./public" directory
app.use(express.static(__dirname + "/public"));
 
// start server
app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
});