import { expect } from "chai";
import { Dizmo } from "../lib";
declare const dizmo: Dizmo;

import "mocha";

describe("Dizmo", () => {
    it("should not exist", () => {
        expect(typeof dizmo).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => dizmo).to.throw(ReferenceError);
    });
});
