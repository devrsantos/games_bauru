module.exports = {
	cadastrarCliente: (db, dadoCliente, response) => {
		try {
			db.collection('clientes').insertOne(dadoCliente);
			response.status(200).send({"Sucesso": "Cliente Cadastrado com Sucesso"});
		} catch(e) {
			response.status(400).send({"Erro": "Cliente não podem ser Cadastrado"});
		}
	},

	consultarCliente: (db, dadoCliente, response) => {
		db.collection('clientes').findOne(dadoCliente).then(dadoRetornado => {
			response.status(200).send(dadoRetornado);
		})
	},

	cadastrarProduto: (db, dadoProduto, response) => {
		try {
			db.collection('produtos').insertOne(dadoProduto);
			response.status(200).send({"Sucesso": "Produto Cadastrado com Sucesso"});
		} catch(e) {
			response.status(400).send({"Erro": "Produto não podem ser Cadastrado"});
		}
	},

	consultarProduto: (db, dadoProduto, response) => {
		db.collection('produtos').findOne(dadoProduto).then(dadoRetornado => {
			response.status(200).send(dadoRetornado);
		})
	},

	cadastrarFuncionario: (db, dadoFuncionario, response) => {
		try {
			db.collection('funcionarios').insertOne(dadoFuncionario);
			response.status(200).send({"Sucesso": "Produto Cadastrado com Sucesso"});
		} catch(e) {
			response.status(400).send({"Erro": "Produto não podem ser Cadastrado"});
		}
	},

	consultarFuncionario: (db, dadoFuncionario, response) => {
		db.collection('funcionarios').findOne(dadoFuncionario).then(dadoRetornado => {
			response.status(200).send(dadoRetornado);
		})
	},

};
