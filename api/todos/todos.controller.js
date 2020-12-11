const todoModel = require('./todos.model');

module.exports = {
    getAll,
    getOne,
    create,
    removeOne,
    putOne,
}

async function getAll(req, res){
    console.log("I am getAll");
    try {
        const todos = await todoModel.find()
        return res.json(todos);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

async function getOne(req, res){
    console.log("I am getOne");
    try {
        const { id } = req.params;
        const todo = await todoModel.findOne({_id: id})
        return res.json(todo);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

function create (req, res){
    console.log("I am create");
    const newTodo = todoModel.create(req.body);
    return res.json(newTodo);
};

async function removeOne(req, res){
    console.log("I am removeOne");
    try {
        const { id } = req.params;
        const todo = await (await todoModel.findOne({_id: id}).deleteOne())
        return res.json(`Deleted to do correctly`);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

async function putOne(req, res){
    console.log("I am puOne");
    try {
        const { id } = req.params;
        const edited = await todoModel.findOne({_id: id}).updateOne(req.body);
        return res.json(edited);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};
