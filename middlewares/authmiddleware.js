const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken,
};

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if ( token == null) return res.sendStatus(401);

    jwt.verify(token, "SECRET", (err, dataStored) => {
        console.log("error: " + err)
        if (err) return res.sendStatus(403)
        req.user = dataStored
        next()
    })
}

