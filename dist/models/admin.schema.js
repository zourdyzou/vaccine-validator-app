"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const adminSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('Admin', adminSchema);
//# sourceMappingURL=admin.schema.js.map