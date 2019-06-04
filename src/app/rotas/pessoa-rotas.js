const PessoaControlador = require('../controladores/pessoa-controlador');
const pessoaControlador = new PessoaControlador();

const Pessoa = require('../modelos/pessoa');

module.exports = (app) => {

    const rotasPessoa = PessoaControlador.rotas();

    app.get(rotasPessoa.lista, pessoaControlador.lista());

    app.get(rotasPessoa.edicao, pessoaControlador.buscaPessoa());

    app.post(rotasPessoa.cadastro, pessoaControlador.cadastro());

    app.put(rotasPessoa.edicao, pessoaControlador.edita());

    app.delete(rotasPessoa.deletar, pessoaControlador.remove());

}

//app.get(rotasPessoa.insere, Pessoa.validacoes(), pessoaControlador.insere());