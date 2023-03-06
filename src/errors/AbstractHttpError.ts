/**
 * Copyright ©2022 Dana Basken
 */

export abstract class AbstractHttpError extends Error {

  http_code: number;

  protected constructor(code: number, message?: string) {
    super(message);
    this.http_code = code;
  }

}
