const userModel = require('./users.model');

module.exports = {
    getAll,
    getOne,
    createOne,
    removeOne,
    putOne,
}

async function getAll(req, res){
    try {
        const users = await userModel.find()
        return res.json(users);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

async function getOne(req, res){
    try {
        const { username } = req.params;
        const user = await userModel.findOne({username: username})
        return res.json(user);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};

function createOne (req, res){
    const newUser = userModel.create(req.body).
    then(user => {
        return res.json(user);
    })
};

async function removeOne(req, res){
    const { username } = req.params;
    return userModel
        .remove( { username  } )
        .then(u => res.json(`Deleted user correctly ${u}`) )
        .catch(e => res.status(500).json(e) )
};

async function putOne(req, res){
    try {
        const { username } = req.params;
        const edited = await userModel.findOne({username: username}).updateOne(req.body);
        return res.json(edited);
    } catch (errors) {
        return res.status(500).json(errors)
    }
};
