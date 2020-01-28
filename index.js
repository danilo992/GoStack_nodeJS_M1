const express = require('express');

const app = express();
 
app.get('/test', (req, res) => {
  return res.json( { messege: "hello word" } );
});

app.listen(3000)