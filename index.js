const express = require('express');
const path = require('path');

const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

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

app.get('/practice', (req, res)=> {
    
    return res.render('practice', {
        title: "let us play with ejs"
    });
});

app.get('/', function(req, res){

    Contact.find({})
    .then((contacts) => {
        res.render('home', {title: "Contact Lists", contact_list: contacts});
    })
    .catch((err) => {
        console.log('Error in fetching the contacts.')
        return;
    })
})


app.post('/create-contact', function(req, res){
//    note : req is an object.
    // contactList.push(req.body);
    // return res.redirect('back');    

    Contact.create(req.body)
    .then((newContact) => {
        console.log('*****', newContact);
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log('error in creating a contact!');        
    })
}); 





app.listen(port, function(err){
    if(err){
        console.log('hey kariel, Error in running the server');
    }
    console.log(`Hey Kariel, yippy My Express server is running on port: ${port}`);
})


// we are assuming something from url of --a-- tag's href=""
//  of delete-button from home.ejs file.
app.get('/delete-contact', function(req, res){
    // console.log(req.query);
    // let phone=req.query.phone;

    let id = req.query.id; 
    console.log(req.query, " :is  id");
    Contact.findByIdAndDelete(id)
    .then(()=> {return res.redirect('back')})
    .catch((err)=> {console.log('Error in deleting data from database.')})    
});




