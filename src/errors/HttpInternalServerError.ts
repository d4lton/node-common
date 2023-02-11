/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpInternalServerError extends HttpError {

  constructor(message?: string) {
    super(500, message || "Internal Server Error");
  }

}
