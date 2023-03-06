/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpResourceNotFoundError extends AbstractHttpError {

  constructor(message?: string) {
    super(404, message || "Not Found");
  }

}
