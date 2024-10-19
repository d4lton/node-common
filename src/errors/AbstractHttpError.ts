/**
 * Copyright ©2022 Dana Basken
 */

export abstract class AbstractHttpError extends Error {

  code: number;

  protected constructor(code: number, message?: string) {
    super(message);
    this.code = code;
  }

}
