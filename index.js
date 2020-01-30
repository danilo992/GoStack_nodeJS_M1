const express = require('express');

const app = express();

app.use(express.json());

//query params = ?test=1
//Route params = /users/1
//Request body = {"name": "Tadeu", "email": "tadeudanilo46@gmail.com"}

// CRUD - Create, Read, Update, Delete
const users = ['danilo', 'tadeu', 'Lindi', 'Lorena'];

app.get('/users', (req, res) => {
  return res.json(users);
})

app.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

app.get('/teste', (req, res) => {

  const nome = req.query.name;

  return res.json({messege: `${nome} sucess...` })
});

app.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users)
})



app.listen(3000);