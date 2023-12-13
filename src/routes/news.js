const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/blogcreate', newsController.create)
router.post('/blogstore', newsController.store)
router.get('/:id/blogedit', newsController.edit)
router.post('/handle-form-action', newsController.handleFormActions)
router.put('/:id', newsController.update)
router.delete('/:id', newsController.delete)
router.get('/:slug', newsController.show)
router.get('/', newsController.showblog)

module.exports = router;
