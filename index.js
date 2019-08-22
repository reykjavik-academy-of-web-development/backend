const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// app.use(() => {
//   console.log('App use is running');
// });

app.post('/', (req, res) => {
  console.log(req.body);
});
app.get('/', (req, res) => {
  res.send('Muna að nota formið!!');
});
app.listen(5000);
