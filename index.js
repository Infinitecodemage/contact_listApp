const express = require('express');
const port = 8000;

const app = express();

// app.get('/talkToIruki', function(req, res){
//     res.send(`Cool, Iruki you have setup "Returning the response from the server".`);
// })

// automatically change Content-Type to "text/html"
app.get('/', function(req, res){
    res.send(`<h1>Cool, Iruki you have setup "Returning the response from the server".<h1>`);
})

app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }console.log(`Yup,Hey fallen Angel, My Express server is running on port: ${port}`);
})