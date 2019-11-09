module.exports = {
  cadastrarCliente: (app, request, response) => {
  	app.src.models.clientes.cadastrarCliente(request, response);
  },
  consultarCliente: (app, request, response) => {
  	app.src.models.clientes.consultarCliente(request, response);
  }
};
