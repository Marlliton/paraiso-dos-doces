import CustomError from "../errors/CustomError";
import { CustomMessagesErrors } from "../errors/CustomMessagesErrors";
import ResultValidator from "./ResultValidator";

type againstNullOrUndefinedProps = {
  propName: string;
  propValue: any;
};

export default class Validate {
  static email<T>(email?: string): ResultValidator<T> {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email!)) return ResultValidator.fail<T>([CustomMessagesErrors.INVALID_EMAIL]);

    return ResultValidator.ok<T>();
  }

  static againstNullOrUndefined<T>(props: againstNullOrUndefinedProps[]): ResultValidator<T> {
    const hasErrors: CustomMessagesErrors[] = [];

    props.forEach(prop => {
      if (!prop.propValue || prop.propValue === undefined || prop.propValue === null) {
        hasErrors.push(CustomError.new(CustomMessagesErrors.NULL, prop.propName));
      }
    });

    return hasErrors.length ? ResultValidator.fail<T>(hasErrors) : ResultValidator.ok<T>();
  }
}
