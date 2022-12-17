const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    res.render('form');
})

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.render('result_output', {
        name: name ? name : "person",
        age: age ? age :"unkown"
    })
})

app.listen(3000);