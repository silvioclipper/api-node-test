const express = require('express');
const router = express. Router();

router.get('/' , (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Catalogo de produto'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Cadastro de produtos'
    })
});

router.get('/:id_produto', (req,res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Identificando um produto.',
        id: id
    });
});

module.exports = router;