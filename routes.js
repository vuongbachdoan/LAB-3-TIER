const todoController = require('./controller');
const router = require('express').Router()

router.get('/todos', todoController.getAll);
router.get('/todos/:id', todoController.getOne);
router.patch('/todos/:id', todoController.updateOne);
router.post('/todos', todoController.create);
router.delete('/todos/:id', todoController.deleteOne);

module.exports = router;