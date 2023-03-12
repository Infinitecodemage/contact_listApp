const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }console.log(`Yup, My Express server is running on port: ${port}`)
})