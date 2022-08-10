"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const Schema = mongoose_1.default.Schema;
const userPlaceSchema = new mongoose_1.default.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('UserPlace', userPlaceSchema);
//# sourceMappingURL=userPlace.schema.js.map