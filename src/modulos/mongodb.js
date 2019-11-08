const { MongoClient, ObjectId } = require('mongodb');
const { usuario, password } = require('./../models/keys');
const { cadastrarUsuario, consultarUsuario } = require('./functionsMongo');

const metodos = {
	url: `mongodb://${usuario}:${password}@ds141228.mlab.com:41228/games_bauru`,
	dbName: "games_bauru",
};

const functionsMongo = (funcao, dadosUsuario, res) => {
	MongoClient.connect(metodos.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
		const db = client.db(metodos.dbName);

		if (['cadastrarUsuario', 'consultarUsuario'].includes(funcao)) {
			
			if (funcao == 'cadastrarUsuario') {
				cadastrarUsuario(db, dadosUsuario, res);
			}

			if (funcao == 'consultarUsuario') {
				consultarUsuario(db, dadosUsuario, res);
			}
			
		} else {
			res.status(400).send({"Erro": "Função Indisponivel"});
		};

		client.close();
	});
}

module.exports = functionsMongo;
