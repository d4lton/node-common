/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpInternalServerError extends AbstractHttpError {

  constructor(message?: string) {
    super(500, message || "Internal Server Error");
  }

}
