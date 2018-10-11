const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const portfolio  = require('./portfolio');
const sgMail     = require('@sendgrid/mail');

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/portfolio', portfolio);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) =>  {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    const msg = {
        to: 'austin.gray4292@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
    };
    sgMail.send(msg);
    res.render('thanks', { contact: req.body })
});

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});