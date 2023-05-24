import pessoas from "../models/Pessoa.js";
import enderecos from "../models/Endereco.js";

class EnderecoController {

  static listarEnderecos = (req, res) => {
    enderecos.find((err, enderecos) => {
      res.status(200).json(enderecos)
  })
  }

  static listarEnderecoPorId = (req, res) => {
    const id = req.params.id;

    enderecos.findById(id, (err, enderecos) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Endereco não localizado.`})
      } else {
        res.status(200).send(enderecos);
      }
    })
  }

  static cadastrarEndereco = (req, res) => {
    let endereco = new enderecos(req.body);

    endereco.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar endereco.`})
      } else {
        res.status(201).send(endereco.toJSON())
      }
    })
  }

  static atualizarEndereco = (req, res) => {
    const id = req.params.id;

    enderecos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Endereco atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirEndereco = (req, res) => {
    const id = req.params.id;

    enderecos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Endereco removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default EnderecoController