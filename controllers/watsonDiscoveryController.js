const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
    version: process.env.WATSON_DISOCVERY_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_DISCOVERY_APIKEY,
    }),
    url: process.env.WATSON_DISCOVERY_URL,
});

let query = async (req, res) => {
    console.log(req.body);

    if (req.body.text) {

        const queryParams = {
            environmentId: process.env.WATSON_DISCOVERY_ENVIRONMENT_ID,
            collectionId: process.env.WATSON_DISCOVERY_COLLECTION_ID,
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