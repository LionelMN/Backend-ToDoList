const router = require('express').Router();
const {getAll, getOne, getAllByUser ,create, removeOne, putOne} = require('./todos.controller');
const {authenticateToken} = require('../../middlewares/authmiddleware')

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/user/:username', getAllByUser);
router.post('/', authenticateToken, create);
router.delete('/:id', removeOne);
router.put('/:id', putOne);

module.exports = router;
