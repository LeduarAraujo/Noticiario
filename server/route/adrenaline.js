const express = require('express');
const router = express.Router();

router.get('/consulta-noticias', (req, res) => {

        var decode = 'https://v1.nocodeapi.com/danish/xml_to_json/vjoGHCzVsMVoIXLV?url=';
        var url = 'https://adrenaline.com.br/rss';

        //Preparativos para a requisição
        var https = require('https');

        /*soap.createClient(url, (err, client) => {
                client.consultaCEP({}, (error, result) => {
                        res.status(200).json(result);
                })
        });*/

        https.get(decode + url, (response) => {
                if (response.statusCode == 200) {

                        response.on('data', odd => {
                                let corpoXML = odd.toString('utf8');
                                let retorno = Buffer.from(JSON.stringify(odd, 'utf8'));
                                res.status(200).json(retorno);

                                /*xml2js.parseString(corpoXML, (err, result) => {
                                        let json = JSON.stringify(result, null, 4);
                                        //console.log(json);
                                });*/
                                //console.log(json);
                                
                        });

                        /*response.on('data', (body) => {
                                let corpo = convert.xml2json(
                                        xml.readFileSync(body, 'utf-8'));
                                res.status(200).send(corpo);                    
                        });*/
                        
                }
        });

});

module.exports = router;