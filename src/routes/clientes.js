module.exports = (app) => {
  
  app.post("/cadClientes", (req, res) => {
    app.src.controllers.clientes.cadClientes(app, req, res);
  }),

  app.get("/consultarCliente", (req, res) => {
  	app.src.controllers.clientes.consultCliente(app, req, res);
  })

};
