module.exports = {
	cadastrarUsuario: (db, dadosUsuario, res) => {
		try {
			db.collection('clientes').insertOne(dadosUsuario);
			res.status(200).send({"Sucesso": "Dados Cadastrado com Sucesso"});
		} catch(e) {
			res.status(400).send({"Erro": "Dados não podem ser Cadastrado"});
		}
	},

	consultarUsuario: (db, dadosUsuario, res) => {
		db.collection('clientes').findOne(dadosUsuario).then(dadoRetornado => {
			res.status(200).send(dadoRetornado);
		})
	}
};
