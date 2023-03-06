/**
 * Copyright ©2022 Dana Basken
 */

import {AbstractHttpError} from "./AbstractHttpError";

export class HttpAcceptedError extends AbstractHttpError {

  constructor(message?: string) {
    super(202, message || "Accepted");
  }

}
