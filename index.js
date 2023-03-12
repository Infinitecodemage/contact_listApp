const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
    return res.render('home', {title: "I am title, Terraze!!"});
})


app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }
    console.log(`Yup,Hey fallen Angel, My Express server is running on port: ${port}`);
})