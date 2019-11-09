module.exports = (app) => {
	app.post('/cadastrarFuncionario', (request, response) => {
		app.src.controllers.funcionarios.cadastrarFuncionario(app, request, response);
	}),

	app.get('/consultarFuncionario', (request, response) => {
		app.src.controllers.funcionarios.consultarFuncionario(app, request, response);
	})
}
