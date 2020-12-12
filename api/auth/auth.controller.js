const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../users/users.model');

module.exports = {
    register,
    login
};

async function register(req, res) {
    let {username, password} = req.body;
    const newUser = await userModel.create({
        username,
        password : bcrypt.hashSync(password, 10),
        todos: []
    });
    delete newUser.password;
    return res.json(newUser)
};

function login(req, res) {
    const userData = {
        username: req.body.username,
        password: req.body.password
    }
    userModel.findOne({ username: userData.username })
        .then( dbUser => {
            if (!dbUser) {
                return res.status(400).json({message: "User or password are incorrect"});
            }
            if (! bcrypt.compareSync(req.body.password, dbUser.password)){
                return res.status(400).json({message: "User or password are incorrect"});
            }

            let token = jwt.sign({user: dbUser}, "SECRET")
            const dataUser = {
                user: dbUser,
                token,
            }
            res.json({
                user: dbUser,
                token,
            })
        })
        .catch(err => {
            return res.status(500).json( erro )
        })
}
