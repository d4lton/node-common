/**
 * Copyright ©2021 Dana Basken
 */

import {Utilities} from "./Utilities";

export class ObjectUtilities {

  /**
   * Get a dot-separated key from an object. If not found, return defaultValue.
   */
  static getDottedKeyValue(key: string, object: any, defaultValue?: any): any {
    if (Utilities.isEmpty(key)) { return defaultValue; }
    if (!Utilities.isObject(object)) { return defaultValue; }
    const parts = key.split(".");
    let result = object;
    parts.forEach(part => {
      try {
        let index: number = -1;
        const match = part.match(/^(.+?)\[(\d+)\]$/);
        if (match) {
          part = match[1];
          index = parseInt(match[2]);
        }
        result = result !== undefined ? result[part] : undefined;
        if (index >= 0) {
          result = Array.isArray(result) ? result[index] : undefined;
        }
      } catch (error) {
        result = undefined;
      }
    });
    return Utilities.isSet(result) ? result : defaultValue;
  }

  /**
   * Set a dot-separated key's value into an object.
   */
  static setDottedKeyValue(key: string, value: any, object: any) {
    if (Utilities.isEmpty(key) || !Utilities.isObject(object)) { return; }
    const parts = key.split(".");
    let data = object;
    parts.forEach((part, index) => {
      if (!data[part]) { data[part] = {}; }
      if (index < parts.length - 1) { data = data[part]; } else { data[part] = value; }
    });
  }

  /**
   * Get all the keys for an object as an array of dot-separated strings.
   */
  static getKeysDeep(object: any, parent?: any): Array<any> {
    if (Utilities.isObject(object)) {
      return Object.keys(object).map(key => {
        return ObjectUtilities.getKeysDeep(object[key], `${parent ? parent + "." : ""}${key}`);
      }).flat();
    }
    return parent;
  }

  /**
   * Deep clone an object. Will fail if the source object has circular references or other things
   * that JSON.stringify doesn't like.
   */
  static clone(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }

}
