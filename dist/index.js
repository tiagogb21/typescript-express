"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// eslint-disable-next-line import/no-unresolved
const error_middleware_1 = __importDefault(require("./src/middlewares/error.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(error_middleware_1.default);
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
