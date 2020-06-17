const express = require('express');
const router = express. Router();

router.get('/' , (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Catalogo de pedido'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Cadastro de pedidos'
    })
});

router.get('/:id_pedido', (req,res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: 'Identificando um pedido.',
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