module.exports = {

  cadClientes: (app, req, res) => {
  	app.src.models.clientes.cadClientes(req, res);
  },

  consultCliente: (app, req, res) => {
  	app.src.models.clientes.consultCliente(req, res);
  }
  
};
