const express = require('express');
const router = express.Router();
const clientViewController = require('./../controllers/clientViewControllers');

router.post('/auth/login', clientViewController.login);
router.get('/auth/session', clientViewController.verify)
router.get('/api/reviews', clientViewController.getLastFiveReviews)
router.post('/auth/logout', clientViewController.logout);
router.post('/api/sendmessage', clientViewController.sendText);
router.get('/api/textinformation', clientViewController.textInformation);
router.post('/api/bitly', clientViewController.generateBitly);
router.get('/api/lasttenmessages', clientViewController.getLastTenMessages);
router.get('/auth/getsession', clientViewController.getSession);
router.post('/api/sentmessages/getall', clientViewController.getAllSent);
router.get('/api/test', clientViewController.test);

module.exports = router;