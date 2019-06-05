const { validationResult } = require('express-validator/check');

const PessoaDao = require('../infra/pessoa-dao');
const connection = require('../infra/connectionFactory')();

class PessoaControlador {

    static rotas() {
        return {
            lista: '/pessoas',
            cadastro: '/pessoas/pessoa/',
            edicao: '/pessoas/pessoa/:id',
            deletar: '/pessoas/pessoa/:id'
        }
    }

    lista() {
        return (req, resp) => {
            const pessoaDao = new PessoaDao(connection);
            pessoaDao.lista((error, result) => {
                resp.send(result);
            });
        }
    }

    cadastro() {
        return (req, resp) => {
            const pessoaDao = new PessoaDao(connection);
            const erros = validationResult(req);
            let erroLista = [];

            if (!erros.isEmpty()) {
                erros.array().forEach((valor, chave) => erroLista.push(valor['msg']));
                return resp.status(400).send(erroLista);
            }


            pessoaDao.cadastro(req.body, (error, result) => {
                resp.location(`/pessoas/pessoa/${result.insertId}`);
                let response = {
                    pessoa: req.body,
                    links: [{
                        href: `http://localhost:3000//pessoas/pessoa/${result.insertId}`,
                        rel: `Deletar`,
                        method: `DELETE`
                    }, {
                        href: `http://localhost:3000//pessoas/pessoa/${result.insertId}`,
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
            const pessoaDao = new PessoaDao(connection);
            pessoaDao.atualiza(req.body, req.params.id, (error, result) => {
                resp.location(`/pessoas/pessoa/${req.params.id}`);
                resp.status(200).send(req.body);
            });
        }
    }

    buscaPessoa() {
        return (req, resp) => {
            const pessoaDao = new PessoaDao(connection);
            pessoaDao.buscaPorId(req.params.id, (error, result) => {
                resp.send(result)
            });
        }
    }

    remove() {
        return (req, resp) => {
            const pessoaDao = new PessoaDao(connection);
            pessoaDao.remove(req.params.id, (error, result) => {
                resp.status(200).end();
            });
        };
    }
}

module.exports = PessoaControlador;