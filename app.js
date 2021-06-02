const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hola  ${req.query.nombre?req.query.nombre.charAt().toUpperCase() + req.query.nombre.slice(1) : "desconocido"}!</h1>`);
  });

app.listen(3000, () => console.log('Listening on port 3000!'));
