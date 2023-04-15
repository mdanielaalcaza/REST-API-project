const express = require('express');
const debug = require('debug')('app:main');

const {Config} = require('./src/config');
const {ProductAPI} = require('./src/products');

const app = express();

app.use(express.json());

ProductAPI(app);

app.listen(Config.port, ()=> {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});
