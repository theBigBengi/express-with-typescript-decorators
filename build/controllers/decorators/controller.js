"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const AppRouter_1 = require("../../AppRouter");
function controller(pathPrefix) {
    const router = AppRouter_1.AppRouter.getInstance;
    return function (target, context) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype[key], key);
            if (path) {
                router.get(`${pathPrefix}${path}`, routeHandler);
            }
        });
    };
}
exports.controller = controller;
