const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const db = require("./db");
const Router = require('./routers/home');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', Router);

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} http://localhost:${PORT}`);
});
