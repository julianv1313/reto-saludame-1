const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hola  ${req.query.nombre?req.query.nombre : "desconocido"}!</h1>`);
  });

app.listen(3000, () => console.log('Listening on port 3000!'));
