const express = require('express');
const port = 8000;

const app = express();

app.get('/', function(req, res){
    res.send(`Cool, Iruki you have setup "Returning the response from the server".`);
})

app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }console.log(`Yup,Hey fallen Angel, My Express server is running on port: ${port}`);
})