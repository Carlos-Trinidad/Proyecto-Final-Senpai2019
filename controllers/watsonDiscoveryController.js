const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
    version: '2019-04-30',
    authenticator: new IamAuthenticator({
        apikey: 'R40U-DmCB61YgzuOUkpX2w977Df_bt4SBcoBvqEnTA6X',
    }),
    url: 'https://gateway.watsonplatform.net/discovery/api',
});

let query = async (req, res) => {
    console.log(req.body);

    if (req.body.text) {

        const queryParams = {
            environmentId: 'f4ecbe43-4aff-4cde-afec-635684d06daf',
            collectionId: '30ea3744-34ad-4037-ac82-84099b108638',
            naturalLanguageQuery: req.body.text
        };

        try {

            let responseDiscovery = await discovery.query(queryParams);
            console.log(responseDiscovery);

            res.send(responseDiscovery.result);

        } catch (error) {
            console.log(`Error: ${error}`);
            res.send(error);
        }

    }
    else {
        res.status(400).send({ error: true, message: `Propiedad 'text' no encontrada.` });
    }



}

module.exports = {
    query
}