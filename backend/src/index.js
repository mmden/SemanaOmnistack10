const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mmn:663361@cluster0-he1gh.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true
});


app.use(express.json());
app.use(routes);

app.listen(2121);