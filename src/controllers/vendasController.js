const vendasModal = require("../models/Vendas");

let message = "";
let type = "";

const VendasHome = async (req, res) => {
  const name = req.session.user.name;
  const vendas = await vendasModal.find();

  return res.render("vendas/index.ejs", {
    user: name,
    message,
    type,
    vendas: vendas,
  });
};

const createVendas = async (req, res) => {
  try {
    const { name, telefone, carro, chassi } = req.body;

    if (!name && telefone && carro && chassi) {
      return res.redirect("/dashboard", {
        message: "Faltando Dados",
        type,
      });
    }

    const venda = await vendasModal.create({
      name,
      telefone,
      carro,
      chassi,
    });
    message = "Criado com sucesso";
    return res.redirect("/vendas");
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  VendasHome,
  createVendas,
};
