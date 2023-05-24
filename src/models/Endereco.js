import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema(
  {
    id: { type: String },
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    pais: { type: String, required: true },
    cep: { type: String },
  }
);

const enderecos = mongoose.model('enderecos', enderecoSchema);

export default enderecos;