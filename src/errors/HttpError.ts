/**
 * Copyright ©2023 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpError extends AbstractHttpError {

  constructor(code: number, message?: string) {
    super(code, message);
  }

}
