"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminMiddleware = void 0;
const admin_schema_1 = __importDefault(require("@/admin.schema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenDecode = (req) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')[1];
        try {
            return jsonwebtoken_1.default.verify(bearer, process.env.TOKEN_SECRET_KEY);
        }
        catch (err) {
            return false;
        }
    }
    else {
        return false;
    }
};
const authAdminMiddleware = async (req, res, next) => {
    try {
        const tokenDecoded = tokenDecode(req);
        const admin = await admin_schema_1.default.findById(tokenDecoded.id);
        if (!admin) {
            return res.status(403).json({
                message: 'you are forbidden to access the materials! access denied',
            });
        }
        return next();
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
exports.authAdminMiddleware = authAdminMiddleware;
//# sourceMappingURL=authAdmin.middleware.js.map