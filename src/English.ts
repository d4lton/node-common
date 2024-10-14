/**
 * Copyright ©2022 Dana Basken
 */

export class English {

  static DIVISIONS: any[] = [
    {amount: 60, name: "seconds"},
    {amount: 60, name: "minutes"},
    {amount: 24, name: "hours"},
    {amount: 7, name: "days"},
    {amount: 4.34524, name: "weeks"},
    {amount: 12, name: "months"},
    {amount: Number.POSITIVE_INFINITY, name: "years"}
  ];

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
   * Get milliseconds from a simple english string and then increase or reduce that amount by a "fuzz" percentage.
   * The percent is a fraction, so 0.25 represents 25%. See EnglishMs.ms().
   */
  static fuzzedMs(time: string, percent: number): number {
    const baseMs = English.ms(time);
    const fuzzMs = baseMs * percent;
    return baseMs + Math.ceil((Math.random() * fuzzMs) - (fuzzMs / 2.0));
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

  /**
   * Get an English name for a give timeframe code.
   */
  static getTimeframeName(timeframe: string, short: boolean = false): string {
    switch (timeframe) {
      case "s": return short ? "Sec" : "Second";
      case "m": return short ? "Min" : "Minute";
      case "h": return short ? "Hr" : "Hour";
      case "d": return "Day";
      case "w": return short ? "Wk" : "Week";
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

  /**
   * Get a human-readable time string for a number of milliseconds.
   */
  static msToString(ms: number, short: boolean = false): string {
    return ["w", "d", "h", "m", "s"]
      .reduce((parts: any[], timeframe: string) => {
        const timeframeMs = English.getTimeframeMs(timeframe);
        if (ms > timeframeMs) {
          const count = Math.floor(ms / timeframeMs);
          ms -= count * timeframeMs;
          parts.push(`${count} ${English.getTimeframeName(timeframe, short)}${English.plural(count)}`);
        }
        return [...parts];
      }, [])
      .join(", ") || `${ms} Millisecond${English.plural(ms)}`;
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

  /**
   * Format a date as an English relative time in the past. eg. "3 days ago"
   */
  static formatTimeAgo(date: Date, locale: string = "en-US"): any {
    const formatter = new Intl.RelativeTimeFormat(locale, {numeric: "auto", style: "long"});
    let duration = (date.getTime() - Date.now()) / 1000;
    for (let i = 0; i <= English.DIVISIONS.length; i++) {
      const division = English.DIVISIONS[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name);
      }
      duration /= division.amount;
    }
    return "forever";
  }

  static toCamelCase(text: string): string {
    return text
      .split(/([^a-zA-Z]+)/g)
      .reduce((parts: string[], part: string) => {
        if (part.trim() === "-") { part = ": "; }
        part = part.replace(/([A-Z])([A-Z]+)/, (substring: string, ...args: any[]) => `${args[0]}${args[1].toLowerCase()}`);
        return [...parts, part];
      }, [])
      .join("");
  }

  static pluralRules(value: number): string {
    const suffixes: any = {"one": "st", "two": "nd", few: "rd", other: "th"};
    const rules = new Intl.PluralRules("en", {type: "ordinal"});
    return `${value}${suffixes[rules.select(value)]}`;
  }

  /**
   * Remove the leading "the " from a given proper noun.
   */
  static baseProperNoun(noun: string): string {
    const match = noun?.match(/^the (.+?)$/i);
    return match ? match[1] : noun;
  }

  static numberFormatter(value: number, options?: Intl.NumberFormatOptions): string {
    if (value == null) { return ""; }
    const defaultOptions:Intl.NumberFormatOptions = {
      style: "currency",
      currency: "USD",
      notation: "compact",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    };
    return new Intl.NumberFormat("en-US", options ?? defaultOptions).format(value);
  };

  static numberToString(value: number): string {
    if (value === 0) { return "0"; }
    const kSize = 1000;
    let power = Math.floor(Math.log(value) / Math.log(kSize));
    value = Math.round(value / Math.pow(kSize, power));
    return `${value}${["", "K", "M", "G", "T"][power]}`;
  }

  /**
   * For a given number, return the plural suffix. By default, this is "s," but if the word you
   * want to add the suffix too needs a special suffix, it can be provided, and a special
   * "singular" prefix as well.
   * EXAMPLES:
   *   English.plural(2): return "s"
   *   `cat${English.plural(2)}`: returns "cats"
   *   `entr${English.plural(2), "ies", "y"}`: return "entries"
   */
  static plural(count: number, pluralSuffix: string = "s", singularSuffix: string = ""): string {
    return count === 1 ? singularSuffix : pluralSuffix;
  }

}
