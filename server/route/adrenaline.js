const express = require('express');

const router = express.Router();

router.get('/consulta-noticias', (req, res) => {
        res.status(200).json({ msg: 'Acesso Concedido!' });
});

module.exports = router;