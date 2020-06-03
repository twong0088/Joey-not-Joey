const express = require('express');

const app = express();

const PORT = 7777;

app.listen(PORT, ()=> {
  console.log(`App is  on PORT: ${PORTT}`)
})

app.get('/hello', (req, res)=> {
  res.send('Hello!')
})