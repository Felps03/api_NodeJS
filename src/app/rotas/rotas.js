const pessoaRotas = require('./pessoa-rotas');
const produtoRotas = require('./produto-rotas');

module.exports = (app) => {
    pessoaRotas(app);
    produtoRotas(app);
};