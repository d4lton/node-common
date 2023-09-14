/**
 * Copyright ©2023 Dana Basken
 */

import {sprintf} from "../src/printf";

describe("printf", function() {

  it("printf() should return correct values", () => {
    expect(sprintf("hello")).toEqual("hello");
    expect(sprintf("hello, %s", "world")).toEqual("hello, world");
    expect(sprintf("hello, %12.1s", "world")).toEqual("hello, world       ");
    expect(sprintf("hello, %-12s", "world")).toEqual("hello,        world");
  });

});
