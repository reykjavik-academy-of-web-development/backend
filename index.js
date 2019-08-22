const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs'); 

const app = express();
app.use(cors());
app.use(
  bodyParser.json()
);



app.post('/', (req, res) => {
  console.log(req.body);
// add a line to a lyric file, using appendFile
  fs.appendFile("./bloggdata", JSON.stringify(req.body), (err) => {
      if (err) throw err;
      console.log('The data was updated!');
    });
  
  
});
app.get('/', (req, res) => {
  res.send('Muna að nota formið!!');
});
app.listen(5000);
