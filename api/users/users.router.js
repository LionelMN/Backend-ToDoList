const router = require('express').Router();
const {getAll, getOne, createOne, removeOne, putOne} = require('./users.controller');

router.get('/', getAll);
router.get('/:username', getOne);
router.post('/', createOne);
router.delete('/:username', removeOne);
router.put('/:username', putOne);

module.exports = router;
