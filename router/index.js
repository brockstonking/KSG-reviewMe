const express = require('express');
const router = express.Router();
const clientViewController = require('./../controllers/clientViewControllers');

router.post('/auth/login', clientViewController.login);
router.get('/auth/session', clientViewController.verify)
router.get('/api/reviews', clientViewController.getLastFiveReviews)
router.post('/auth/logout', clientViewController.logout);
router.post('/api/sendmessage', clientViewController.sendTextTest);
router.get('/api/textinformation', clientViewController.textInformation);
router.get('/api/lasttenmessages', clientViewController.getLastTenMessages);
router.get('/auth/getsession', clientViewController.getSession);
router.post('/api/sentmessages/getall', clientViewController.getAllSent);
router.get('/api/test', clientViewController.test);
router.post('/api/messageinformation', clientViewController.getFeedbackInfo);
router.post('/api/message/thumbsup', clientViewController.thumbsUp);
router.post('/api/message/thumbsdown', clientViewController.thumbsDown);

module.exports = router;