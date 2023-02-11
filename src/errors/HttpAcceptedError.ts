/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpAcceptedError extends HttpError {

  constructor(message?: string) {
    super(202, message || "Accepted");
  }

}
