const express = require('express');
const path = require('path'); //klei ścieżki


const app = express(); //twprzenie nowej aplikacji express i przypisanie do stąłej app

app.get('/', (req, res) => { //app to odnośnik do serwera. get to metodą którą chcemy obsługiwać w endpoincie
    res.sendFile(path.join(__dirname + '/views/index.html')); //req=request(zapytanie o informacje o użytkowniku) res=respons(odpowiedzi zawiera metody do komunikacji zwrotnej)
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/contact.html'));
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/info.html'));
});

app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/history.html'));
});


app.listen(8000, () => {  //aplikacja app. utworzeni serwera http na porcie 8000
  console.log('Server is running on port: 8000');
});
