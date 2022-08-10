"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const Schema = mongoose_1.default.Schema;
const vaccineLotSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    vaccinated: {
        type: Number,
        required: true,
        default: 0,
    },
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine',
        required: true,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('VaccineLot', vaccineLotSchema);
//# sourceMappingURL=vaccineLot.schema.js.map