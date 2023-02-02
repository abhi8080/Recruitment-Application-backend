const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('helloo');
});

app.use('/auth', require('./routes/authRoute'));
app.use('/applications', require('./routes/applicationRoute'));

module.exports = app;
