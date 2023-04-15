const express = require("express");

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductAPI = (app) => {
  router
    .get('/', (req, res) => {}) 
    .get('/:id', (req, res) => {})
    .post('/', (req, res) => {})
  
  app.use('/api/products',router)
};
