//fetch memes from different subs and then add a new button to fetch different memes or news or football or anything


const express = require('express')
const app = express();

const path = require('path');
const hbs = require('hbs');
app.set('view engine','hbs');


const myPath = path.join(__dirname,'./public/views');
app.use(express.static('public'));
app.set('views', myPath);


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(800,()=>{
    console.log('REDDIT MEMES RUNNIG AT PORT 800');
})