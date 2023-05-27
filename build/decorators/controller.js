"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const AppRouter_1 = require("../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
function controller(pathPrefix) {
    const router = AppRouter_1.AppRouter.getInstance;
    return function (target, context) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype[key], key);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype[key], key);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype[key], key) || [];
            if (path) {
                // Register route
                router[method](`${pathPrefix}${path}`, ...middlewares, routeHandler);
            }
        });
    };
}
exports.controller = controller;
