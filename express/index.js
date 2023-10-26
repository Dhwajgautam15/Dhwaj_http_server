const express = require('express');
const app = express();
const uuid = require('uuid');
const port = 3000; 

app.get('/html', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
  });

  app.get('/json', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/index.json');
  });

  app.get('/uuid', (req, res) => {
    const generatedUUID = uuid.v4();
    res.json({ uuid: generatedUUID });
  });

  app.get('/status/:xyz', (req, res) => {
    const statusCode = (req.params.xyz);
    res.status(parseInt(statusCode)).send(`ERROR : ${statusCode}`);


  });

  app.get('/delay/:delaySeconds', (req, res) => {
    const delaySeconds = parseInt(req.params.delaySeconds);
    setTimeout(() => {
      res.send(`Response after delay ${delaySeconds}`);
    }, delaySeconds * 1000);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
