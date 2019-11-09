const { MongoClient } = require('mongodb');
const { usuario, password } = require('./../models/keys');
const { 
	cadastrarCliente,
	consultarCliente,
	cadastrarProduto,
	consultarProduto,
	cadastrarFuncionario,
	consultarFuncionario
} = require('./functionsMongo');

const metodos = {
	url: `mongodb://${usuario}:${password}@ds141228.mlab.com:41228/games_bauru`,
	dbName: "games_bauru",
};

const functionsMongo = (funcao, dado, response) => {
	MongoClient.connect(metodos.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
		const db = client.db(metodos.dbName);

		if ([
			'cadastrarCliente',
			'consultarCliente',
			'cadastrarProduto',
			'consultarProduto', 
			'cadastrarFuncionario', 
			'consultarFuncionario'
		].includes(funcao)) {
			
			if (funcao == 'cadastrarCliente') {
				cadastrarCliente(db, dado, response);
			}

			if (funcao == 'consultarCliente') {
				consultarCliente(db, dado, response);
			}

			if (funcao == 'cadastrarProduto') {
				cadastrarProduto(db, dado, response);
			}
			
			if (funcao == 'consultarProduto') {
				consultarProduto(db, dado, response);
			}

			if (funcao == 'cadastrarFuncionario') {
				cadastrarFuncionario(db, dado, response)
			}
			
			if (funcao == 'consultarFuncionario') {
				consultarFuncionario(db, dado, response)
			}
		}

		client.close();
	});
}

module.exports = functionsMongo;
