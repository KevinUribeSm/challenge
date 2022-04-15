require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hola mundo')
});

app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
});