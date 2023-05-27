"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
/**
 * define a singleton class that's going to wrap up
 * the one single express router that's going to exist inside of our app.
 */
class AppRouter {
    static get getInstance() {
        if (!AppRouter.instance) {
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    }
}
exports.AppRouter = AppRouter;
