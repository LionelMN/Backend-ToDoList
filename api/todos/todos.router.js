const router = require('express').Router();
const {getAll, getOne, create, removeOne, putOne} = require('./todos.controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.delete('/:id', removeOne);
router.put('/:id', putOne);

module.exports = router;

