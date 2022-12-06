import Result from "../validator/ResultValidator";
import Validate from "../validator/Validate";

export default class Email {
  private _value: string;
  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string): Result<Email> {
    const emailError = Validate.email<Email>(value);
    return emailError.isFailure ? emailError : Result.ok<Email>(new Email(value));
  }
}
