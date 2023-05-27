"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
function get(path) {
    return function (originalMethod, context) {
        Reflect.defineMetadata("path", path, originalMethod, context.name);
    };
}
exports.get = get;
