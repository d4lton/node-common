/**
 * Copyright ©2021 Dana Basken
 */

export class Utilities {

  /**
   * Pause execution for a number of milliseconds.
   */
  static async sleep(ms: number, controller?: AbortController): Promise<void> {
    return new Promise<void>((resolve: Function) => {
      function awaken() {
        clearTimeout(timeout);
        controller?.signal.removeEventListener("abort", awaken);
        resolve();
      }
      const timeout = setTimeout(awaken, ms);
      controller?.signal.addEventListener("abort", awaken);
    });
  }

  /**
   * Is a given value set (not null or undefined)?
   */
  static isSet(value: any): boolean {
    return value !== undefined && value !== null;
  }

  /**
   * Is a given value empty, meaning, does it have a value? For a string, this means it contains characters. For an
   * Array, this means it has at least one element. For an object, does it contain any keys? For all, it means it's
   * not null or undefined.
   * Note: For objects, only a simple object works. Object instances will need their own check for "empty"
   */
  static isEmpty(value: any): boolean {
    if (!Utilities.isSet(value)) { return true; }
    if (Array.isArray(value)) { return value.length === 0; }
    if (typeof value === "string") { return value.length === 0; }
    if (Utilities.isObject(value)) { return Object.keys(value).length === 0; }
    return false;
  }

  /**
   * Is the given value an object?
   */
  static isObject(value: any): boolean {
    if (!Utilities.isSet(value)) { return false; }
    return (typeof value === "object" && !Array.isArray(value));
  }

  /**
   * Check a value to see if it is a given type.
   */
  static isType(value: any, type: string): boolean {
    switch (type) {
      case "string":
        if (typeof value !== "string") { return false; }
        break;
      case "number":
        if (typeof value !== "number" && Number.isNaN(parseFloat(value))) { return false; }
        break;
      default:
        return false; // unknown type
    }
    return true;
  }

  /**
   * Given a value, return a string representation, truncating the string in the middle if it is longer than the given maxLength.
   */
  static truncateMiddle(value: any, maxLength: number = 128): string {
    value = typeof value === "string" ? value : `${JSON.stringify(value)}`;
    if (value.length > maxLength) {
      const half = Math.floor(maxLength / 2);
      return value.substring(0, half - 1) + "…" + value.substring(value.length - half);
    }
    return value;
  }

}
