const { check } = require('express-validator/check');
const CPF = require('cpf');

class Pessoa {
    static validacoes() {
        return [
            check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
            check('nascimento').custom(this.isValidDate).withMessage('A data é invalida. Formato valido { yyyy-mm-dd }'),
            check('cpf').custom(this.isCPF).withMessage('O CPF é invalido'),
            check('peso').isDecimal().withMessage('O peso precisa ter no mínimo 1 caracteres e precisa ser decimal!'),
            check('altura').isDecimal().withMessage('A altura precisa ter no mínimo 1 caracteres e precisa ser decimal!'),
            check('senha').isLength({ min: 6 }).withMessage('A senha precisa ter no mínimo 6 caracteres!')
        ]
    }

    static isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }

    static isCPF(value) {
        return CPF.isValid(value);
    }
}

module.exports = Pessoa;