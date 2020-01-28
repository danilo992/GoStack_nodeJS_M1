const express = require('express');

const app = express();

//query params = ?test=1
//Route params = /users/1
//Request body = {"name": "Tadeu", "email": "tadeudanilo46@gmail.com"}
 
app.get('/users/:id', (req, res) => {

  const {id} = req.params;

  return res.json({menssege: `buscndo... ${id}`}) ;
});

app.listen(3000)