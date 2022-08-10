"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json({ message: 'Authorization failed!' });
    }
    try {
        return jsonwebtoken_1.default.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res
                    .status(403)
                    .json({ message: 'Invalid authentication token' });
            }
            req.user = user;
            return next();
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map