const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const portfolio   = require('./portfolio');

const app = express();

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/portfolio', portfolio)

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) =>  {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
});

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});