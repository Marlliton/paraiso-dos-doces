import { CustomMessagesErrors } from "../errors/CustomMessagesErrors";
import ResultValidator from "../validator/ResultValidator";

export default class Name {
  private _value: string;
  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  get initials() {
    const [first, second] = this.value.split(" ");
    return (first[0] + second[0]).toUpperCase();
  }

  static create(value: string): ResultValidator<Name> {
    if (value.length < 3 || value.length > 60)
      return ResultValidator.fail<Name>([CustomMessagesErrors.INVALID_SIZE_NAME]);
    return ResultValidator.ok<Name>(new Name(value));
  }
}
