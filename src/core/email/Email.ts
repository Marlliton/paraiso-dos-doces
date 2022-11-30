import Result from "../errors/Result";
import Validate from "../shared/Validate"

interface EmailProps {
  email?: string;
}

export default class Email {
  private _props: EmailProps;
  constructor(props: EmailProps) {
    this._props = props;
  }

  get email() {
    return this._props.email;
  }

  static create(props: EmailProps): Result<Email> {
    const emailError = Validate.email<Email>(props.email);

    return emailError.isFailure ? emailError : Result.ok<Email>(new Email(props));
  }
}
