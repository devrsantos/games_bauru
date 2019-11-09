module.exports = {
	cadastrarProduto: (app, request, response) => {
		app.src.models.produtos.cadastrarProduto(request, response)
	},

	consultarProduto: (app, request, response) => {
		app.src.models.produtos.consultarProduto(request, response)
	},
}
