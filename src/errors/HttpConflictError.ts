/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpConflictError extends HttpError {

  constructor(message?: string) {
    super(409, message || "Conflict");
  }

}
