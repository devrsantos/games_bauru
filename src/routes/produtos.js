module.exports = (app) => {
	app.post('/cadastrarProduto', (request, response) => {
		app.src.controllers.produtos.cadastrarProduto(app, request, response)
	}),

	app.get('/consultarProduto', (request, response) => {
		app.src.controllers.produtos.consultarProduto(app, request, response)
	})
}
