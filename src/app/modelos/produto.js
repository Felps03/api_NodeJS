const { check } = require('express-validator/check');

class Produto {
    static validacoes() {
        return [
            check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
            check('cor').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
        ]
    }
}

module.exports = Produto;