class PessoaDao {
    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.connect();

        this._connection.query('SELECT * FROM pessoas', callback);

        this._connection.end();
    }
}

module.exports = PessoaDao;