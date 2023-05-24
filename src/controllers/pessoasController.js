import pessoas from "../models/Pessoa.js";

class PessoaController {

  static listarPessoas = (req, res) => {
    pessoas.find()
      .populate('pessoa')
      .exec((err, pessoas) => {
        res.status(200).json(pessoas)
  })
  }

  static listarPessoaPorId = (req, res) => {
    const id = req.params.id;

    pessoas.findById(id)
      .populate('pessoa', 'nome')
      .exec((err, pessoas) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Pessoa não localizado.`})
      } else {
        res.status(200).send(pessoas);
      }
    })
  }

  static cadastrarPessoa = (req, res) => {
    let pessoa = new pessoas(req.body);

    pessoa.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Pessoa.`})
      } else {
        res.status(201).send(pessoa.toJSON())
      }
    })
  }

  static atualizarPessoa = (req, res) => {
    const id = req.params.id;

    pessoas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Pessoa atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirPessoa = (req, res) => {
    const id = req.params.id;

    pessoas.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Pessoa removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  
}

export default PessoaController