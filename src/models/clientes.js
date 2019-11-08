const functionsMongo = require('./../modulos/mongodb');

module.exports = {

	cadClientes: (req, res) => {
		
		const dadosUsuario = {
			nome: req.body.nome,
			cpf: req.body.cpf,
			rg: req.body.rg,
			residencia: req.body.residencia,
			nascimento: req.body.nascimento,
			telefone: req.body.telefone,
			email: req.body.email,
			login: req.body.login,
			senha: req.body.senha,
		};

		functionsMongo('cadastrarUsuario', dadosUsuario, res);
	},

	consultCliente: (req, res) => {
		
		for(let key in req.body) {

			if (key != 'undefined') {

				if (key == 'login') {
					const login = req.body.login;
					functionsMongo('consultarUsuario', {login}, res);	
				} else if (key == 'cpf') {
					const cpf = req.body.cpf;
					functionsMongo('consultarUsuario', {cpf}, res);
				} else if (key == 'email') {
					const email = req.body.email;
					functionsMongo('consultarUsuario', {email}, res);
				}
				
			}

		};

	}

}
