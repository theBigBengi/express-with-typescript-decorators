"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const AppRouter_1 = require("../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
const validateBody_1 = require("../middlewares/validateBody");
function controller(pathPrefix) {
    const router = AppRouter_1.AppRouter.getInstance;
    // Decorators on class allways return Class constructor as first argument
    return function (target, context) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype[key]);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype[key]);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype[key]) ||
                [];
            const requiredsBodyFields = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validate, target.prototype[key]) || [];
            const validator = (0, validateBody_1.validateBody)(requiredsBodyFields);
            if (path) {
                // Register route
                router[method](`${pathPrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        });
    };
}
exports.controller = controller;
