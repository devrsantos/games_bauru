const yup = require("yup");

let schema = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required(),
  login: yup.string().required(),
  email: yup.string().email()
});

module.exports = (app) => {
  app.post("/cad_clientes", (req, res) => {
    const {
      nome,
      cpf,
      rg,
      residencia,
      nascimento,
      telefone,
      email,
      login,
      senha
    } = req.body;

    schema
      .isValid({
        nome,
        cpf,
        login,
        email
      })
      .then((valid) => {
        res.status(200).send(valid);
      });
  });
};
