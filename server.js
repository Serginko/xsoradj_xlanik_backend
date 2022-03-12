const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const mongoose = require('mongoose');

const databaseUri = process.env.DATABASE_URI


MongoClient.connect(databaseUri, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('Autoservis')
  const customers = db.collection('customers')


  app.post('/customers', (req, res) => {
    /*customers.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))*/

      customers.insertOne( { item: "card", qty: 15 } ).then(() => {
        res.status(201).json(req.body);
      })
  })

})

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.post('/postik', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})


app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});