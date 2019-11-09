const functionsMongo = require('./../modulos/mongodb');

module.exports = {
	cadastrarFuncionario: (request, response) => {
		const funcionarioCadastrado = {
			nome: request.body.nome,
			sobrenome: request.body.sobrenome,
			cpf: request.body.cpf,
			rg: request.body.rg,
			nascimento: request.body.nascimento,
			email: request.body.email,
			telefone: request.body.telefone,
			cargo: request.body.cargo,
			salario: request.body.salario,
			admissao: request.body.admissao,
		};

		functionsMongo('cadastrarFuncionario', funcionarioCadastrado, response);

	},

	consultarFuncionario: (request, response) => {
		const cpf = request.body.cpf;
		
		functionsMongo('consultarFuncionario', {cpf}, response);	
	}
}
