/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpUnauthorizedError extends AbstractHttpError {

  constructor(message?: string) {
    super(401, message || "Unauthorized");
  }

}
