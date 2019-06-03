const PessoaControlador = require('../controladores/pessoa-controlador');
const pessoaControlador = new PessoaControlador();

const Pessoa = require('../modelos/pessoa');

module.exports = (app) => {

    const rotasPessoa = PessoaControlador.rotas();
    app.get(rotasPessoa.home, Pessoa.validacoes(), pessoaControlador.lista());

}