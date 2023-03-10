/**
 * Copyright ©2021 Dana Basken
 */

import assert from "assert";
import {Utilities} from "../src";

describe("Utilities", function() {

  it("isSet() should detect null and undefined", () => {
    assert.equal(Utilities.isSet(null), false);
    assert.equal(Utilities.isSet(undefined), false);
  });

  it("isSet() should detect values", () => {
    assert.equal(Utilities.isSet(null), false);
    assert.equal(Utilities.isSet(undefined), false);
    assert.equal(Utilities.isSet(1), true);
    assert.equal(Utilities.isSet(""), true);
    assert.equal(Utilities.isSet({}), true);
    assert.equal(Utilities.isSet({name: "test"}), true);
    assert.equal(Utilities.isSet([]), true);
    assert.equal(Utilities.isSet([1, "two"]), true);
    assert.equal(Utilities.isSet(true), true);
  });

  it("isEmpty should detect values", () => {
    assert.equal(Utilities.isEmpty(null), true);
    assert.equal(Utilities.isEmpty(undefined), true);
    assert.equal(Utilities.isEmpty(""), true);
    assert.equal(Utilities.isEmpty("hi"), false);
    assert.equal(Utilities.isEmpty([]), true);
    assert.equal(Utilities.isEmpty([1]), false);
    assert.equal(Utilities.isEmpty({}), true);
    assert.equal(Utilities.isEmpty({name: "test"}), false);
    assert.equal(Utilities.isEmpty(12), false);
  });

  it("isObject should detect objects", () => {
    assert.equal(Utilities.isObject(null), false);
    assert.equal(Utilities.isObject(undefined), false);
    assert.equal(Utilities.isObject(1), false);
    assert.equal(Utilities.isObject(""), false);
    assert.equal(Utilities.isObject("hi"), false);
    assert.equal(Utilities.isObject([]), false);
    assert.equal(Utilities.isObject([1]), false);
    assert.equal(Utilities.isObject({}), true);
    assert.equal(Utilities.isObject({name: "test"}), true);
  });

  it("sleep works as expected", async () => {
    const durationMs = 200;
    const startMs = Date.now();
    await Utilities.sleep(durationMs);
    const elapsedMs = Date.now() - startMs;
    assert(elapsedMs >= durationMs);
  });

  it("sleep aborts as expected", async () => {
    const durationMs = 300;
    const abortMs = 200;
    const controller = new AbortController();
    const startMs = Date.now();
    setTimeout(() => controller.abort(), abortMs);
    await Utilities.sleep(durationMs, controller);
    const elapsedMs = Date.now() - startMs;
    assert(elapsedMs >= abortMs && elapsedMs < durationMs);
  });

  it("isType should detect types", () => {
    expect(Utilities.isType("12", "string")).toBe(true);
    expect(Utilities.isType(12, "number")).toBe(true);
    expect(Utilities.isType(12, "foo")).toBe(false);
    expect(Utilities.isType("a", "number")).toBe(false);
    expect(Utilities.isType(12, "string")).toBe(false);
  });

  it("truncateMiddle should work as expected", () => {
    expect(Utilities.truncateMiddle({a: 12})).toBe(`{"a":12}`);
    expect(Utilities.truncateMiddle("Hello, World!")).toBe("Hello, World!");
    const truncated = Utilities.truncateMiddle("Lakeside Park - Willows in the breeze - Lakeside Park - So many memories - Laughing rides - Midway lights - Shining stars on summer nights");
    expect(truncated).toBe("Lakeside Park - Willows in the breeze - Lakeside Park - So many… Laughing rides - Midway lights - Shining stars on summer nights");
    expect(truncated.length).toBe(128);
  });

});
