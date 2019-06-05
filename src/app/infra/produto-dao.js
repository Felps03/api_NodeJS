class ProdutoDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('SELECT * FROM produtos', callback);
    }

    cadastro(produto, callback) {
        this._connection.query('INSERT INTO produtos (nome, preco, descricao, categoria, cor) VALUES (?, ?, ?, ?, ?)', [produto.nome, produto.preco, produto.descricao, produto.categoria, produto.cor], callback);
    }

    atualiza(produto, id, callback) {
        this._connection.query('UPDATE produtos SET nome = ?, preco = ?, descricao = ?, categoria = ?, cor = ? WHERE id = ?', [produto.nome, produto.preco, produto.descricao, produto.categoria, produto.cor, id], callback);
    }

    buscaPorId(id, callback) {
        this._connection.query('SELECT * FROM produtos WHERE id = ?', id, callback);
    }

    remove(id, callback) {
        this._connection.query('DELETE FROM produtos WHERE id = ?', id, callback);
    }
}

module.exports = ProdutoDao;