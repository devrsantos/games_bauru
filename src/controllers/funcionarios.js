module.exports = {
	cadastrarFuncionario: (app, request, response) => {
		app.src.models.funcionarios.cadastrarFuncionario(request, response);
	},

	consultarFuncionario: (app, request, response) => {
		app.src.models.funcionarios.consultarFuncionario(request, response);
	},
}
