const router = require('express').Router();
const { deleteOne } = require('../todos/todos.model');
const {getAll, getOne, createOne, removeOne, putOne} = require('./users.controller');

router.get('/', getAll);
router.get('/:username', getOne);
router.post('/', createOne);
router.delete('/:username', deleteOne);
router.put('/:username', putOne);

module.exports = router;