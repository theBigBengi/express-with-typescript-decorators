"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
function validateBody(keys) {
    return function (req, res, next) {
        if (!req.body) {
            return res.status(422).send(`Missing body `);
        }
        for (const key of keys) {
            if (!req.body[key]) {
                return res.status(422).send(`Missing ${key} `);
            }
        }
        next();
    };
}
exports.validateBody = validateBody;
