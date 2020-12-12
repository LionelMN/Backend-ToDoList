const todoModel = require('./todos.model');
const userModel = require("../users/users.model");

module.exports = {
    getAll,
    getOne,
    create,
    removeOne,
    putOne,
}

async function getAll(req, res){
    try {
        const todos = await todoModel.find()
        return res.json(todos);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

async function getOne(req, res){
    try {
        const { id } = req.params;
        const todo = await todoModel.findOne({_id: id})
        return res.json(todo);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

function create(req, res) {
    return userModel.findOne({ username: req.body.owner })
      .then(async userExists => {
          if (userExists) {
            const newTodo = await todoModel.create(req.body);
            userExists.todos.push(newTodo._id);
            return userExists.save()
              .then(userEdited => {
                return res.json(newTodo);
              })
          } else {
            return res.status(400).send("That user doesnt exists ");
          }
      })

}

async function removeOne(req, res){
    try {
        const { id } = req.params;
        const todo = await (await todoModel.findOne({_id: id}).deleteOne())
        return res.json(`Deleted to do correctly`);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

async function putOne(req, res){
    try {
        const { id } = req.params;
        const edited = await todoModel.findOne({_id: id}).updateOne(req.body);
        return res.json(edited);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};
