"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineLot = exports.Vaccine = exports.UserVaccine = exports.UserPlace = exports.User = exports.Place = exports.Admin = void 0;
const admin_schema_1 = __importDefault(require("@/models/admin.schema"));
exports.Admin = admin_schema_1.default;
const place_schema_1 = __importDefault(require("@/models/place.schema"));
exports.Place = place_schema_1.default;
const user_schema_1 = __importDefault(require("@/models/user.schema"));
exports.User = user_schema_1.default;
const userPlace_schema_1 = __importDefault(require("@/models/userPlace.schema"));
exports.UserPlace = userPlace_schema_1.default;
const userVaccine_schema_1 = __importDefault(require("@/models/userVaccine.schema"));
exports.UserVaccine = userVaccine_schema_1.default;
const vaccine_schema_1 = __importDefault(require("@/models/vaccine.schema"));
exports.Vaccine = vaccine_schema_1.default;
const vaccineLot_schema_1 = __importDefault(require("@/models/vaccineLot.schema"));
exports.VaccineLot = vaccineLot_schema_1.default;
//# sourceMappingURL=schemas.js.map