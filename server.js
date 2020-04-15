const express = require('express');

const app = express(); //twprzenie nowej aplikacji express i przypisanie do stąłej app

app.listen(8000, () => {  //aplikacja app. utworzeni serwera http na porcie 8000
  console.log('Server is running on port: 8000');
});
