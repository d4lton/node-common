/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpUnprocessableEntityError extends AbstractHttpError {

  constructor(message?: string) {
    super(422, message || "Unprocessable Entity");
  }

}
