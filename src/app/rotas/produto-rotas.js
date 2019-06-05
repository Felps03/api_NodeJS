const ProdutoControlador = require('../controladores/produto-controlador');
const produtoControlador = new ProdutoControlador();

const Produto = require('../modelos/produto');

module.exports = (app) => {

    const rotasProduto = ProdutoControlador.rotas();

    app.get(rotasProduto.lista, produtoControlador.lista());

    app.get(rotasProduto.edicao, produtoControlador.buscaProduto());

    app.post(rotasProduto.cadastro, Produto.validacoes(), produtoControlador.cadastro());

    app.put(rotasProduto.edicao, Produto.validacoes(), produtoControlador.edita());

    app.delete(rotasProduto.deletar, produtoControlador.remove());

}