const repository = require('../repositories/products-repository');
const { validationResult } = require('express-validator');


// list
exports.listProducts = async (req, res) => {
  try {
    const data = await repository.listProducts();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);

  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os produtos!'});
  }
};

// get by id
exports.getById= async (req, res) => {
    try {
      const data = await repository.getProduct(req.params.id);
    
      res.status(200).send(data);

    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar os produtos!'});
    }
  };

// create
exports.createProduct= async (req, res) => {
    const {errors} = validationResult(req);
  
    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }
  
    try {
      await repository.createProduct({
       nome: req.body.nome,
        imagem: req.body.imagem,
        preco:req.body.preco
      });
      return res.status(201).send({message: 'Produto cadastrada com sucesso!'});
    } catch (e) {
      return res.status(500).send({message: 'Falha ao cadastrar o produto.'});
    }
  };

//update
exports.updateProduct = async (req, res) => {
    const {errors} = validationResult(req);
  
    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }
    try {
      await repository.updateProduct(req.params.id, req.body);
      return res.status(200).send({
        message: 'Produto atualizada com sucesso!'
      });
    } catch (e) {
      return res.status(500).send({message: 'Falha ao atualizar o produto.'});
    }
  };

  // delete
exports.deleteProduct = async (req, res) => {
    try {
      await repository.deleteProduct(req.params.id);
      res.status(200).send({
        message: 'Produto Removido com sucesso!'
      });
    } catch (e) {
      res.status(500).send({message: 'Falha ao remover o produto'});
    }
  };