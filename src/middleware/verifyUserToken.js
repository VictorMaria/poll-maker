const jwt = require('jsonwebtoken');
const { errorResponse } = require('../helpers/responseHandler');
const JWT_SECRET = process.env.JWT_SECRET;
const { UserToken } = require('../models');

const verifyUserToken = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header) {
            return errorResponse(res, 400, 'No token provided');
        }

        const [prefix, token] = header.split(' ');
        if (String(prefix).toLowerCase() !== 'bearer') {
            return errorResponse(res, 400, 'No token provided');
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err && err.name === 'TokenExpiredError') return errorResponse(res, 400, 'Expired Token');
            
            if (err) return errorResponse(res, 400, 'Invalid Token Provided');

            req.user = decoded;
        });
        return next();

    } catch (err) {
        return next(err);
    }
};

module.exports = verifyUserToken;