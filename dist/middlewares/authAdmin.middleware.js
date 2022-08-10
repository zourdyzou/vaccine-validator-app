"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminMiddleware = void 0;
const user_schema_1 = __importDefault(require("@/models/user.schema"));
const authAdminMiddleware = async (req, res, next) => {
    var _a;
    try {
        const user = await user_schema_1.default.findOne({ _id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id });
        if ((user === null || user === void 0 ? void 0 : user.role) !== 1) {
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