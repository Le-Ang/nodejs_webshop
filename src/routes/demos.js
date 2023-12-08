const express = require('express');
const router = express.Router();

const demoController = require('../app/controllers/DemoController');

router.get('/create', demoController.create)
router.post('/store', demoController.store)
router.get('/:id/edit', demoController.edit)
router.post('/handle-form-action', demoController.handleFormActions)
router.put('/:id', demoController.update)
router.patch('/:id/restore', demoController.restore)
router.delete('/:id', demoController.delete)
router.delete('/:id/force', demoController.forceDestroy)
router.get('/:slug', demoController.show)

module.exports = router
