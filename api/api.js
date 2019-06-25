const router = require('express').Router();
const nodemailer = require("nodemailer");

// GET API root
router.get('/api', (req, res) => {
  res.send('API works');
});

router.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Your message has successfully been sent!' });
  // res.status(500).json({ message: 'ERROR ERROR '});
});

module.exports = router;