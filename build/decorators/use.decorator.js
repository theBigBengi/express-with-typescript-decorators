"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
const MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (value, context) {
        // Limit use the of the decorator
        if (context.kind === "method") {
            // Get middlewares metadata
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, value) || [];
            // Add the new middleware
            middlewares.push(middleware);
            // Define the new middlewares metadata
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, middlewares, value);
        }
    };
}
exports.use = use;
