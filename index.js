const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middle inbuilt in ExpressJs
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList = [
    {
        name: "Sharielle", 
        phone: 1233434347 },
    {
        name: "Dante", 
        phone: 2123343434 }, 
    {
        name: "Mark", 
        phone: 3233434348 }
]



app.get('/', function(req, res){
    console.log('from the get route controller', req.myName);

    return res.render('home', {
        // locals or 'context'
        title: "Contact List",
        contact_list : contactList
    });
})

app.get('/practice', (req, res)=> {
    
    return res.render('practice', {
        title: "let us play with ejs"
    });
});


app.post('/contact-list', function(req, res){

//    note : req is an object.
    contactList.push(req.body);
    return res.redirect('back');
    
});


app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }
    console.log(`Yup,Hey fallen Angel, My Express server is running on port: ${port}`);
})

