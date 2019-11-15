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
    if (req.body.action === 'reservar_hotel') {
        //Hacer lógica de reserva de hotel;
        let habitaciones = [11, 23, 54, 32, 26];
        res.send(
            {
                success: true,
                message: 'habitación reservada',
                hotel: req.body.hotel,
                date: req.body.date,
                habitacion: habitaciones[0]
            }
        )
    }
    else{
        res.send(
            {
                error: true,
                message: 'action no valida'
            }
        )
    }
});

module.exports = router;