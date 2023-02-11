/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpUnauthorizedError extends HttpError {

  constructor(message?: string) {
    super(401, message || "Unauthorized");
  }

}
