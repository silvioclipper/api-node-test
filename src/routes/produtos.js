const express = require('express');
const router = express. Router();

const myssql = require('../../mysql').pool;

router.get('/' , (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Catalogo de produto'
    });
});

router.post('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos(nome, preco) VALUES (?, ?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                    error: error,
                    response: null,
                            teste: 'teste'
                    });
                }
                res.status(201).send({
                    mensagem: 'Produto inserido',
                    id_produto: resultado.insertId
                });
            }
        )
    });
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