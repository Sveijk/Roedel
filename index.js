const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(5000);
console.log("Server is listening");
