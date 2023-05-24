import express from "express";
import pessoas from "./pessoaRoutes.js"
import enderecos from "./enderecoRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Aula de node"})
  })

  app.use(
    express.json(),
    enderecos,
    pessoas
  )
}

export default routes