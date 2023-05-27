"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const decorators_1 = require("../decorators");
const requiredAuth_1 = require("../middlewares/requiredAuth");
exports.LoginController = (() => {
    let _classDecorators = [(0, decorators_1.controller)("/auth")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getLogin_decorators;
    let _postLogin_decorators;
    let _getLogout_decorators;
    var LoginController = _classThis = class {
        getLogin(req, res) {
            res.render("login");
        }
        postLogin(req, res) {
            const { username, password } = req.body;
            if (username === "username" && password === "password") {
                req.session = { loggedIn: true };
                return res.redirect("/");
            }
            else {
                return res.status(403).send("Invalid username or password");
            }
        }
        getLogout(req, res) {
            req.session = undefined;
            res.redirect("/");
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "LoginController");
    (() => {
        _getLogin_decorators = [(0, decorators_1.get)("/login")];
        _postLogin_decorators = [(0, decorators_1.post)("/login"), (0, decorators_1.bodyValidator)("username", "password")];
        _getLogout_decorators = [(0, decorators_1.get)("/logout"), (0, decorators_1.use)(requiredAuth_1.requireAuth)];
        __esDecorate(_classThis, null, _getLogin_decorators, { kind: "method", name: "getLogin", static: false, private: false, access: { has: obj => "getLogin" in obj, get: obj => obj.getLogin } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _postLogin_decorators, { kind: "method", name: "postLogin", static: false, private: false, access: { has: obj => "postLogin" in obj, get: obj => obj.postLogin } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getLogout_decorators, { kind: "method", name: "getLogout", static: false, private: false, access: { has: obj => "getLogout" in obj, get: obj => obj.getLogout } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        LoginController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginController = _classThis;
})();
