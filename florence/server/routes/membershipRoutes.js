const express = require('express');
const router = express.Router();
const { submitMembership, getAllMemberships } = require('../controllers/membershipController');

router.post('/', submitMembership);
router.get('/', getAllMemberships);

module.exports = router;
