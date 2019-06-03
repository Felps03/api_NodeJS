const { validationResult } = require('express-validator/check');

const PessoaDao = require('../infra/pessoa-dao');
const db = require('../../config/database');

class PessoaControlador {

    static rotas() {
        return {
            home: '/'
        }
    }

    lista() {
        return (req, resp) => {
            resp.send("ok");
        }
    }

}

module.exports = PessoaControlador;