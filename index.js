const express = require('express');

const app = express();

app.use(express.json());

//query params = ?test=1
//Route params = /users/1
//Request body = {"name": "Tadeu", "email": "tadeudanilo46@gmail.com"}

// CRUD - Create, Read, Update, Delete
const users = ['danilo', 'tadeu', 'Lindi', 'Lorena'];

//app.use((req, res, next) => {
//  console.time('requets');
//  console.log(`Método: ${req.method}; URL: ${req.url}`);
//  next()
//  console.timeEnd('requets');
//})

//lista todo os usuários
app.get('/users', (req, res) => {
  return res.json(users);
});

//lista 1 usuário espercífico
app.get('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

//add nome ao usuário
app.get('/teste', (req, res) => {

  const nome = req.query.name;

  return res.json({messege: `${nome} sucess...` })
});

function ckeckUserExit(req, res, next) {
  const user = req.body.name;
  if(!user) {
    return res.status(404).json({err: 'User name is requered!!!'});
  }
  next()
}

function checkUserInArray(req, res, next) {
  if(!users[req.params.index]) {
    return res.status(400).json({ erro: "User does not exits" });
  }
  next()
}

//cadastra usuário
app.post('/users', ckeckUserExit, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users)
});

//edita usuário
app.put('/users/:index', ckeckUserExit, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

//delete usuário
app.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);

});

app.listen(3000);