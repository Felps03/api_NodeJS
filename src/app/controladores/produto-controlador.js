const { validationResult } = require('express-validator/check');

const ProdutoDao = require('../infra/produto-dao');
const connection = require('../infra/connectionFactory')();

class ProdutoControlador {

    static rotas() {
        return {
            lista: '/produtos',
            cadastro: '/produtos/produto/',
            edicao: '/produtos/produto/:id',
            deletar: '/produtos/produto/:id'
        }
    }

    lista() {
        return (req, resp) => {
            const produtoDao = new ProdutoDao(connection);
            produtoDao.lista((error, result) => {
                resp.send(result);
            });
        }
    }

    cadastro() {
        return (req, resp) => {
            const produtoDao = new ProdutoDao(connection);
            const erros = validationResult(req);
            let erroLista = [];
            if (!erros.isEmpty()) {
                erros.array().forEach((valor, chave) => erroLista.push(valor['msg']));
                return resp.status(400).send(erroLista);
            }
            produtoDao.cadastro(req.body, (error, result) => {
                resp.location(`/produtos/produto${result.insertId}`);
                let response = {
                    produto: req.body,
                    links: [{
                        href: `http://localhost:3000/produtos/produto/${result.insertId}`,
                        rel: `Deletar`,
                        method: `DELETE`
                    }, {
                        href: `http://localhost:3000/produtos/produto/${result.insertId}`,
                        rel: `Editar`,
                        method: `PUT`
                    }]
                }
                resp.status(201).send(response);
                if (error) console.log(error);
            });
        }
    }

    edita() {
        return (req, resp) => {
            const produtoDao = new ProdutoDao(connection);
            const erros = validationResult(req);
            let erroLista = [];
            if (!erros.isEmpty()) {
                erros.array().forEach((valor, chave) => erroLista.push(valor['msg']));
                return resp.status(400).send(erroLista);
            }
            produtoDao.atualiza(req.body, req.params.id, (error, result) => {
                resp.location(`/produtos/produto/${req.params.id}`);
                resp.status(200).send(req.body);
            });
        }
    }

    buscaProduto() {
        return (req, resp) => {
            const produtoDao = new ProdutoDao(connection);
            produtoDao.buscaPorId(req.params.id, (error, result) => {
                resp.send(result)
            });
        }
    }

    remove() {
        return (req, resp) => {
            const produtoDao = new ProdutoDao(connection);
            produtoDao.remove(req.params.id, (error, result) => {
                resp.status(200).end();
            });
        };
    }
}

module.exports = ProdutoControlador;