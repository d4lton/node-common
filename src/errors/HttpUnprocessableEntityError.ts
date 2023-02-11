/**
 * Copyright ©2022 Dana Basken
 */

import {HttpError} from "./HttpError";

export class HttpUnprocessableEntityError extends HttpError {

  constructor(message?: string) {
    super(422, message || "Unprocessable Entity");
  }

}
