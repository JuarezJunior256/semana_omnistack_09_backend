const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// criando o servidor
const app = express();

// conectando com o banco 
mongoose.connect('mongodb+srv://juniordev:dev123789456@omnistack9-moyuy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação)

app.use(express.json());
// carregando rotas 
app.use(routes);

// porta da api
app.listen(3333);