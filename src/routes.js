const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// carregar todos controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Rotas Usuarios
routes.post('/sessions', SessionController.store);
// Rotas Spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
// Rotas Dashboard
routes.get('/dashboard', DashboardController.show);
// Rotas Booking
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;