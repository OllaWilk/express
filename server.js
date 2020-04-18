const express = require('express');
const upload = require('express-fileupload');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
app.engine('hbs', hbs());
app.set('view engine', 'hbs');


app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(upload());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { layout: 'darkLeyout' });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact/send-message', (req, res) => {
    console.log(':::',req.files);
    const { author, sender, title, message } = req.body;
    const {files} = request;
    if (author && sender && title && message && files.attachment) {
        res.render('contact', { isSent: true });
      } else {
        res.render('contact', { isError: true });
      }
});

app.get('/info', (req, res) => {
    res.render('info');
});

app.get('/history', (req, res) => {
    res.render('history');
});

app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
});


app.use((req, res) => {
    res.status(404).send('404 not found...');
})



app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
