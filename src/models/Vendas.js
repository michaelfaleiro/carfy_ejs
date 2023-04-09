const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendasSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    carro: {
      type: String,
      required: true,
    },
    chassi: {
      type: String,
      required: true,
    },

    produtos: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Produtos",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendas", vendasSchema);
