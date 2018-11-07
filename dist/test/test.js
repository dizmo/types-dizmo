"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
describe("Dizmo", function () {
    it("should not exist", function () {
        chai_1.expect(typeof dizmo === "undefined" ? "undefined" : _typeof(dizmo)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return dizmo;
        }).to.throw(ReferenceError);
    });
});
//# sourceMappingURL=test.js.map