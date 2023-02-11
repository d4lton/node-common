/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpResourceNotFoundError extends HttpError {

  constructor(message?: string) {
    super(404, message || "Not Found");
  }

}
