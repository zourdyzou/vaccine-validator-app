"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const admin_schema_1 = __importDefault(require("@/models/admin.schema"));
const createAdmin = async () => {
    const username = process.env.DEFAULT_ADMIN_USERNAME;
    const password = process.env.DEFAULT_ADMIN_PASSWORD;
    try {
        const admin = await admin_schema_1.default.findOne({ username: username });
        if (admin !== null) {
            return true;
        }
        const newAdmin = new admin_schema_1.default({
            username,
            password: crypto_js_1.default.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY),
        });
        console.log('--------------------------');
        console.log('Admin created with');
        console.log(`Username => ${username}`);
        console.log(`Password => ${password}`);
        console.log('--------------------------');
        return await newAdmin.save();
    }
    catch (error) {
        console.error(error);
    }
};
exports.createAdmin = createAdmin;
//# sourceMappingURL=seedAdmin.js.map