"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const userSchema = new mongoose_1.default.Schema({
    idNumber: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=user.schema.js.map