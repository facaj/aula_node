import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
{
id: { type: String },
nome: { type: String, required: true },
idade: { type: Number, required: true },
endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'enderecos', required: true},
profissao: { type: String },
}
);

const pessoas = mongoose.model('pessoas', pessoaSchema);

export default pessoas;