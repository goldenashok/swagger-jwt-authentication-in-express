const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const userData = require('../model/user');

dotEnv.config();

const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, process.env.ACCESSTOKEN, (err, user) => {
            if (err) {
                res.status(403).json({'message': 'Access token not matched'});
            } else {
                req.user = user.user;
                next();
            }
        });
    } else {
        res.status(403).json({'message': 'Access token not matched'});
    }
}

const loginUser = (req, res) => {
    const user = req.body.username;
    if (!user) {
        res.status(400).json({'message': 'username are required'});
    }
    // const token = jwt.sign(user, process.env.ACCESSTOKEN);
    const token = jwt.sign({user}, process.env.ACCESSTOKEN, {expiresIn: '10m'} );
    res.status(200).json({
        token: token
    })
};

const productLoginUser = (req, res) => {
 res.status(200).json({
        user: userData.filter(item => item.user === req.user)
    })
}

module.exports = { loginUser, productLoginUser, ensureToken };