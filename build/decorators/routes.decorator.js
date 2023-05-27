"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.patch = exports.del = exports.post = exports.get = void 0;
const MetadataKeys_1 = require("./MetadataKeys");
const MethodsKeys_1 = require("./MethodsKeys");
function routeBinder(method) {
    return function (path) {
        return function (originalMethod, context) {
            // Path metadata
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, originalMethod);
            //MethodPath metadata
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, originalMethod);
        };
    };
}
// Export routes decorators
exports.get = routeBinder(MethodsKeys_1.Methods.get);
exports.post = routeBinder(MethodsKeys_1.Methods.post);
exports.del = routeBinder(MethodsKeys_1.Methods.del);
exports.patch = routeBinder(MethodsKeys_1.Methods.patch);
exports.put = routeBinder(MethodsKeys_1.Methods.put);
