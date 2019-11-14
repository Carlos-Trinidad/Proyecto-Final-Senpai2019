const express = require('express');
const router = express.Router();

// Controllers
const helloWorldController = require('../controllers/helloWorldController');
const watsonVisualRecognitionController = require('../controllers/watsonVisualRecognitionController');
const watsonDiscoveryController = require('../controllers/watsonDiscoveryController');

// Routes
router.get('/helloworld', helloWorldController.helloWorld);

router.post('/classify/image', watsonVisualRecognitionController.classifyImage);
router.post('/search/discovery', watsonDiscoveryController.query);

router.post('/test/webhook/assistant', async (req, res) => {
    console.log(req.body);
    res.send({response: "Hola Webhook"});
});

module.exports = router;