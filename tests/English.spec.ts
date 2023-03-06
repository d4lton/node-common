/**
 * Copyright ©2022 Dana Basken
 */

import {English} from "../src";

describe("English", function() {

  it("getTimeframeMs() should return correct values", () => {
    expect(English.getTimeframeMs("s")).toEqual(1000);
    expect(English.getTimeframeMs("m")).toEqual(60000);
    expect(English.getTimeframeMs("h")).toEqual(3600000);
    expect(English.getTimeframeMs("d")).toEqual(86400000);
    expect(English.getTimeframeMs("w")).toEqual(604800000);
  });

  it("ms() should return correct values", () => {
    expect(English.ms("1s")).toEqual(1000);
    expect(English.ms("3s")).toEqual(3000);
    expect(English.ms("-1s")).toEqual(-1000);
    expect(English.ms("1m")).toEqual(60000);
    expect(English.ms("5m")).toEqual(300000);
    expect(English.ms("1h")).toEqual(3600000);
    expect(English.ms("1d")).toEqual(86400000);
    expect(English.ms("2d")).toEqual(172800000);
    expect(English.ms("-2d")).toEqual(-172800000);
    expect(English.ms("10w")).toEqual(6048000000);
  });

  it("formatTimeAgo should return reasonable values", () => {
    const now = new Date();
    expect(English.formatTimeAgo(now)).toBe("now");
    now.setMonth(now.getMonth() - 6);
    expect(English.formatTimeAgo(now)).toBe("6 months ago");
  });

});
