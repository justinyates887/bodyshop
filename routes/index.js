const express = require('express');
const router = express.Router();
const path = require('path');

const { mail } = require('../utils/mail')

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

router.get('/trainers', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/pages/Trainers.html'));
});

router.post('/access', async (req, res, next) => {
  const mailer = await mail(req.body)
  if(!mailer) res.json({ status: 'fail' })
  else res.json({ status: 'success' })
})

module.exports = router;