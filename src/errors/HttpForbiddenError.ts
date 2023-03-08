/**
 * Copyright ©2023 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpForbiddenError extends AbstractHttpError {

  constructor(message?: string) {
    super(403, message || "Forbidden");
  }

}
