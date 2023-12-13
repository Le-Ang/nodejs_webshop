const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/demos', meController.storedDemos)
router.get('/stored/blogs', meController.storedBlogs)
router.get('/trash/demos', meController.trashDemos)

module.exports = router
