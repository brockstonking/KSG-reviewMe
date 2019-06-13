const express = require('express');
const router = express.Router();
const clientViewController = require('./../controllers/clientViewControllers');

router.post('/auth/login', clientViewController.login);
router.get('/auth/session', clientViewController.verify)
router.get('/api/reviews', clientViewController.getLastFiveReviews)
router.post('/auth/logout', clientViewController.logout);
router.post('/api/send-message', clientViewController.sendMessage);
router.get('/api/textinformation', clientViewController.textInformation);

module.exports = router;