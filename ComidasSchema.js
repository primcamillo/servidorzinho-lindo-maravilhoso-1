const mongoose = require("mongoose");
//cada schema equivale a um collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, require: true },
    descricao: { type: String }, //opcional
    valor: { type: Number }, //opcional
    imagem: { type: String }
})
const comidas = mongoose.model("comidas", ComidasSchema);

module.exports = comidas;