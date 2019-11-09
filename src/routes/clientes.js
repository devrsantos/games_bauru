module.exports = (app) => {
	app.post("/cadastrarCliente", (request, response) => {
		app.src.controllers.clientes.cadastrarCliente(app, request, response);
  	}),
  	app.get("/consultarCliente", (request, response) => {
  		app.src.controllers.clientes.consultarCliente(app, request, response);
  	})
};
