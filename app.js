const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
urlEncodedParser = bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());
app.set('view engine', 'ejs');

let todos = [{
    todo: "Fix my bed",
    todo: "Clean the room"
}]


app.get('/', (req,res)=>{
    res.render('index', {data:todos});
})

app.post('/todos', urlEncodedParser, (req,res)=>{
    todos.push(req.body)
    res.redirect('/');
})


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})



