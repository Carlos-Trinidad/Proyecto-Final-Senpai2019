const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    authenticator: new IamAuthenticator({
        apikey: 'z9So0JhexqWHtVz_csEKWql0XxVFgKoRtf2G3dlzEom'
    }),
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
});


let classifyImage = async (req, res) => {

    const classifyParams = {
        imagesFile: fs.createReadStream('./data/67.jpg'),
        owners: ['IBM', 'me']
    };

    visualRecognition.classify(classifyParams)
        .then(response => {
            const classifiedImages = response.result;
            console.log(JSON.stringify(classifiedImages, null, 2));
            res.send(classifiedImages);
        })
        .catch(err => {
            console.log('error:', err);
        });

}

module.exports = {
    classifyImage
}