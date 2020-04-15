const express = require('express');

const app = express(); //twprzenie nowej aplikacji express i przypisanie do stąłej app

app.get('/', (req, res) => { //app to odnośnik do serwera. get to metodą którą chcemy obsługiwać w endpoincie
    res.send('<h1>My first server!</h1>'); //req=request(zapytanie o informacje o użytkowniku) res=respons(odpowiedzi zawiera metody do komunikacji zwrotnej)
});

app.listen(8000, () => {  //aplikacja app. utworzeni serwera http na porcie 8000
  console.log('Server is running on port: 8000');
});
