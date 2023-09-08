const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3001

app.get('/teste', (req,res) => {
  res.status(200)
  .send({mensagem:'Ola'})
});

app.listen(port,() => {
  console.log(`Servidor esta rodando na porta ${port}`)  
} );

module.exports = app