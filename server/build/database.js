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
exports.createShortenedUrl = exports.UrlModel = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
function connect(dbURI) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect(dbURI).then((connection) => {
            if (!connection) {
                return console.log("Connection failed");
            }
            return;
        });
    });
}
exports.connect = connect;
const UrlSchema = new mongoose_1.default.Schema({
    shorted_url: {
        type: "string",
        required: true,
    },
    url: {
        type: "string",
        required: true,
    },
});
exports.UrlModel = mongoose_1.default.model("Url", UrlSchema);
function createShortenedUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        var result;
        exports.UrlModel.create({ url: url, shortUrl: (0, nanoid_1.nanoid)() }, (err, model) => {
            if (err) {
                console.log(err);
                result = { success: false, message: err.message, url: null };
            }
            result = {
                success: true,
                message: "Successfully created url",
                url: model.shortUrl,
            };
        });
        return result;
    });
}
exports.createShortenedUrl = createShortenedUrl;
