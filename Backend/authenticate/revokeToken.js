const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN } = require('../config');

// generate a token
const revokeToken = (id) => {
    return jwt.sign({id}, ACCESS_TOKEN, {expiresIn: "1ms"});
};

module.exports = revokeToken;