const express = require('express');
const path = require('path');
const port = process.env.PORT || 8085;

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(port, ()=> console.log(`Server is running...OK`));

//app.listen(port, ()=> console.log(`Server is running on: http://localhost:${port}`));
