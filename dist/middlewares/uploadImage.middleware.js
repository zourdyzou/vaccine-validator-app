"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageMiddleware = void 0;
const removeTemp_1 = require("@utils/removeTemp");
const uploadImageMiddleware = async (req, res, next) => {
    var _a;
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res
                .status(400)
                .json({ message: 'no files were uploaded to the server' });
        }
        const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file;
        if ((file === null || file === void 0 ? void 0 : file.size) > 4000) {
            (0, removeTemp_1.removeTemp)(file.tempFilePath);
            return res.status(400).json({ message: 'size of the file is too large' });
        }
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            (0, removeTemp_1.removeTemp)(file.tempFilePath);
            return res.status(400).json({ message: 'file format is not supported' });
        }
        return next();
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.uploadImageMiddleware = uploadImageMiddleware;
//# sourceMappingURL=uploadImage.middleware.js.map