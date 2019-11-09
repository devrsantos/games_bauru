const functionsMongo = require('./../modulos/mongodb');

module.exports = {
	
	cadastrarProduto: (request, response) => {
		const produtoCadastrado = {
			nome: request.body.nome,
			plataforma: request.body.plataforma,
			genero: request.body.genero,
			classificacao: request.body.classificacao,
			lancamento: request.body.lancamento,
			valor: request.body.valor,
			produtora: request.body.produtora,
			imagem: request.body.imagem,
			trailer: request.body.trailer,
		};

		functionsMongo('cadastrarProduto', produtoCadastrado, response);
	},

	consultarProduto: (request, response) => {
		const nome = request.body.nome;
		functionsMongo('consultarProduto', {nome}, response);
	}

}
