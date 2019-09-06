import 'mocha';

import { SensorOpenAeonObject } from '../../src/classes/SensorOpenAeonObject';
import { ISensorOpenObject } from '../../src/interfaces/ISensorOpenObject';

import assert = require("assert");

describe("SensorOpenAeonObject", () => {
    it("ctx", () => {
        let test: ISensorOpenObject = new SensorOpenAeonObject("http://rootURI");
        assert.equal(test.RootUri, "http://rootURI");
    });
});
