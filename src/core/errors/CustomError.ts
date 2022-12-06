import { CustomMessagesErrors } from "./CustomMessagesErrors";

export default class CustomError extends Error {
  constructor() {
    super();
  }

  static new(msg: CustomMessagesErrors, propertyName?: string) {
    const error = propertyName ? new Error(`${propertyName}: ${msg}`) : new Error(msg);
    return error.message as CustomMessagesErrors;
  }
}
