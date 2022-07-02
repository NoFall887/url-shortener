"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.connect)(process.env.DB_URI.toString());
app.use(express_1.default.json());
app.post("/api/shortenUrl", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    const result = yield (0, database_1.createShortenedUrl)(url);
    if (result.success) {
        return res.json(result);
    }
    return res.json(result);
}));
app.get("/api/checkUrl", (req, res) => { });
app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port " + (process.env.PORT || 5000));
});
