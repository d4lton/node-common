/**
 * Copyright ©2022 Dana Basken
 */

export class English {

  /**
   * Get milliseconds from a simple english string that consists of an optional sign (+/-), a decimal value, and a
   * timeframe indicator of s, m, h, d, w for seconds, minutes, hours, days, week. Example: "2w" for 2 weeks.
   */
  static ms(time: string): number {
    const matches = time.match(/([+-]*)(\d+)([smhdw])/);
    if (!matches) { throw new Error(`time string of "${time}" is not understood`); }
    const sign: string = matches[1] || "+";
    const timeframeCount: number = parseFloat(matches[2]);
    const timeframe: string = matches[3];
    const timeframeMs: number = English.getTimeframeMs(timeframe);
    const totalMs: number = timeframeMs * timeframeCount;
    return sign === "+" ? totalMs : -totalMs;
  }

  /**
   * Get the number of milliseconds for a simple english string's timeframe. See English.ms().
   */
  static getTimeframeMs(timeframe: string): number {
    switch (timeframe) {
      case "s": return 1000;
      case "m": return 60000;
      case "h": return 3600000;
      case "d": return 86400000;
      case "w": return 604800000;
      default: throw new Error(`unknown timeframe: "${timeframe}"`);
    }
  }

  static bytesToNumber(bytes: string, binary: boolean = true): number {
    const matches = bytes.match(/^(\d+)([KMGT]B)$|^(\d+)(B)$/)?.filter(it => it);
    if (!matches) { throw new Error(`size string of "${bytes}" is not understood`); }
    const count: number = parseFloat(matches[1]);
    const magnitude: string = matches[2];
    const magnitudeBytes: number = English.getMagnitudeBytes(magnitude, binary);
    return count * magnitudeBytes;
  }

  static bytesToString(value: number, binary: boolean = true): string {
    if (value === 0) { return "0B"; }
    const kSize = binary ? 1024 : 1000;
    let power = Math.floor(Math.log(value) / Math.log(kSize));
    const bytes = Math.round(value / Math.pow(kSize, power));
    return `${bytes}${["B", "KB", "MB", "GB", "TB"][power]}`;
  }

  static bytes(bytes: any, binary: boolean = true): number | string {
    if (typeof bytes === "string") {
      return English.bytesToNumber(bytes, binary);
    } else if (typeof bytes === "number") {
      return English.bytesToString(bytes, binary);
    } else {
      throw new Error("unknown size type");
    }
  }

  /**
   * Get the number of bytes for a simple english string's magnitude. See English.bytes().
   */
  static getMagnitudeBytes(magnitude: string, binary: boolean = true): number {
    switch (magnitude) {
      case "B": return 1;
      case "KB": return binary ? 1_024 : 1_000;
      case "MB": return binary ? 1_048_576 : 1_000_000;
      case "GB": return binary ? 1_073_741_824 : 1_000_000_000;
      case "TB": return binary ? 1_099_511_627_776 : 1_000_000_000_000;
      default: throw new Error(`unknown magnitude: "${magnitude}"`);
    }
  }

}
