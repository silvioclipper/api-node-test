const express = require('express');
const router = express. Router();

router.get('/' , (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Catalogo de produto'
    });
});

router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'Inserção de produtos',
        produtoCriado: produto  
    })
});

router.get('/:id_produto', (req,res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Identificando um produto.',
        id: id
    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        messagem: 'PATCH'
    });
});
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'DELETE'
    });
});

module.exports = router;