import ResultValidator from "../validator/ResultValidator";
import Validate from "../validator/Validate";

export default class Email {
  private _value: string;
  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string): ResultValidator<Email> {
    const emailError = Validate.validEmail(value);
    return !emailError.success
      ? ResultValidator.fail<Email>(emailError.message!)
      : ResultValidator.ok<Email>(new Email(value));
  }
}
