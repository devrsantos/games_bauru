const functionsMongo = require('./../modulos/mongodb');

module.exports = {

	cadClientes: (request, response) => {
		
		const usuarioCadastrado = {
			nome: request.body.nome,
			cpf: request.body.cpf,
			rg: request.body.rg,
			residencia: request.body.residencia,
			nascimento: request.body.nascimento,
			telefone: request.body.telefone,
			email: request.body.email,
			login: request.body.login,
			senha: request.body.senha,
		};

		functionsMongo('cadastrarCliente', usuarioCadastrado, response);
	},

	consultarCliente: (request, response) => {
		
		for(let key in request.body) {

			if (key != 'undefined') {

				if (key == 'login') {
					const login = request.body.login;
					functionsMongo('consultarCliente', {login}, response);	
				} else if (key == 'cpf') {
					const cpf = request.body.cpf;
					functionsMongo('consultarCliente', {cpf}, response);
				} else if (key == 'email') {
					const email = request.body.email;
					functionsMongo('consultarCliente', {email}, response);
				}
				
			}

		}

	}

}
