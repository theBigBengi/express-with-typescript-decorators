"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
const MetadataKeys_1 = require("./MetadataKeys");
function bodyValidator(...keys) {
    return function (originalMethod, context) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validate, keys, originalMethod);
    };
}
exports.bodyValidator = bodyValidator;
