/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpConflictError extends AbstractHttpError {

  constructor(message?: string) {
    super(409, message || "Conflict");
  }

}
