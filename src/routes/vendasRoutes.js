const routes = require("express").Router();

const VendasController = require("../controllers/vendasController");

routes.get("/vendas", VendasController.VendasHome);
routes.post("/vendas/create", VendasController.createVendas);

module.exports = routes;
