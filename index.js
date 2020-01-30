const express = require('express');

const app = express();

app.use(express.json());

//query params = ?test=1
//Route params = /users/1
//Request body = {"name": "Tadeu", "email": "tadeudanilo46@gmail.com"}

// CRUD - Create, Read, Update, Delete
const users = ['danilo', 'tadeu', 'Lindi', 'Lorena'];

app.use((req, res, next) => {
  console.log('A requisição foi chamada');
  next()
})

//lista todo os usuários
app.get('/users', (req, res) => {
  return res.json(users);
});

//lista 1 usuário espercífico
app.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

//add nome ao usuário
app.get('/teste', (req, res) => {

  const nome = req.query.name;

  return res.json({messege: `${nome} sucess...` })
});

//cadastra usuário
app.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users)
});

//edita usuário
app.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

//delete usuário
app.delete('users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();

})



app.listen(3000);