"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("@/utils/schemaOptions");
const Schema = mongoose_1.default.Schema;
const userVaccineSchema = new mongoose_1.default.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine',
        required: true,
    },
    vaccineLot: {
        type: Schema.Types.ObjectId,
        ref: 'VaccineLot',
        required: true,
    },
}, schemaOptions_1.schemaOptions);
exports.default = mongoose_1.default.model('UserVaccine', userVaccineSchema);
//# sourceMappingURL=userVaccine.schema.js.map