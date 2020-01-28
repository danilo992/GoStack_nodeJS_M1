const express = require('express');

const app = express();

//query params = ?test=1
//Route params = /users/1
//Request body = {"name": "Tadeu", "email": "tadeudanilo46@gmail.com"}
const users = ["Danilo", " Tadeu", "da", "silva"]

app.get('/users/:index', (req, res) => {

  const {index} = req.params;

  return res.json(users[index]) ;
});

app.listen(3000);