const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 3000;

//rotas
const soapAdrenaline = require('./route/adrenaline');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/soap-adrenaline/', soapAdrenaline);

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})

module.exports = app;