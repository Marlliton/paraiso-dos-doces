import ResultValidator from "../validator/ResultValidator";
import Validate from "../validator/Validate";

export default class PhoneNumber {
  private _value: string;
  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string): ResultValidator<PhoneNumber> {
    const numberOrError = Validate.validPhoneNumber<PhoneNumber>(value);
    return numberOrError.isFailure
      ? numberOrError
      : ResultValidator.ok<PhoneNumber>(new PhoneNumber(value));
  }
}
