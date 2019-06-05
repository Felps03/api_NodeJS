const { check } = require('express-validator/check');

class Pessoa {
    static validacoes() {
        return [
            check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
            check('nascimento').custom(this.isValidDate).withMessage('A data é invalida. Formato valido { yyyy-mm-dd }'),
            check('senha').isLength({ min: 6 }).withMessage('A senha precisa ter no mínimo 6 caracteres!')
        ]
    }

    static isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }


}

module.exports = Pessoa;