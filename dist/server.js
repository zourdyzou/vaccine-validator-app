"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
(() => {
    var _a;
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use((0, helmet_1.default)());
    app.get('/', (_req, res) => {
        res.send(' <div><h1>God bless humanity!</h1></div>  ');
    });
    const URI = process.env.MONGODB_URI_CLOUD;
    mongoose_1.default.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err) => {
        if (err)
            throw err;
        console.log('connected to db');
    });
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000;
    app.listen(PORT, () => {
        console.log(`server is running on port:${PORT}`);
    });
})();
//# sourceMappingURL=server.js.map