"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const Schema = mongoose_1.default.Schema;
const placeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('Place', placeSchema);
//# sourceMappingURL=place.schema.js.map