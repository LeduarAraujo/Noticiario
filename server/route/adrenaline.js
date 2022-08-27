const express = require('express');
const router = express.Router();

router.get('/consulta-noticias', (req, res) => {

        var url = 'https://adrenaline.com.br/rss';
        var axios = require('axios');
        var fs = require('fs');
        var { parseString } = require('xml2js');

        axios.get(url).then((response) => {
                parseString(response.data, (err, jsonBody) => {
                        res.status(200).json(jsonBody);
                });
        }).catch( err => res.status(500).json(err));
});

module.exports = router;