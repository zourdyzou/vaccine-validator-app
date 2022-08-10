"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTemp = void 0;
const fs_1 = __importDefault(require("fs"));
const removeTemp = (path) => {
    return fs_1.default.unlink(path, (error) => {
        if (error)
            throw error;
    });
};
exports.removeTemp = removeTemp;
//# sourceMappingURL=removeTemp.js.map