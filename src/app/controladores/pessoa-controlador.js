const { validationResult } = require('express-validator/check');

const PessoaDao = require('../infra/pessoa-dao');
const connection = require('../infra/connectionFactory')();

class PessoaControlador {

    static rotas() {
        return {
            home: '/'
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

}

module.exports = PessoaControlador;