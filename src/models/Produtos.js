const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const produtoSchema = new Schema({
    produto: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Produtos', produtoSchema)