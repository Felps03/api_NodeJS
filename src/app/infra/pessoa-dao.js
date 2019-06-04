class PessoaDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('SELECT * FROM pessoas', callback);
    }

    cadastro(pessoa, callback) {
        this._connection.query('INSERT INTO pessoas (nome, nascimento, cpf, peso, altura, descricao, senha) VALUES (?, ?, ?, ?, ?, ?, ?)', [pessoa.nome, pessoa.nascimento, pessoa.cpf, pessoa.peso, pessoa.altura, pessoa.descricao, pessoa.senha], callback);
    }

    atualiza(pessoa, id, callback) {
        this._connection.query('UPDATE pessoas SET nome = ?, nascimento = ?, cpf = ?, peso = ?, altura = ?, descricao = ?, senha = ? WHERE id = ?', [pessoa.nome, pessoa.nascimento, pessoa.cpf, pessoa.peso, pessoa.altura, pessoa.descricao, pessoa.senha, id], callback);
    }

    buscaPorId(id, callback) {
        this._connection.query('SELECT * FROM pessoas WHERE id = ?', id, callback);
    }

    remove(id, callback) {
        this._connection.query('DELETE FROM pessoas WHERE id = ?', id, callback);
    }
}

module.exports = PessoaDao;