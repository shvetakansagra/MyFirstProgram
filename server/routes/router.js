const express = require('express');
const router = express.Router();
const moment = require('moment');
const services=require('../services/render')
const controller =require('../controller/controller');

// Root Route  

router.get('/',services.homeRoutes);

// Add Data Route
router.get('/views/Add_Data.html',services.Add_Data);

router.get('/views/update_Data.html',services.update_Data)

//API
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);

module.exports = router ;