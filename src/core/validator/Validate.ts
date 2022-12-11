import { CustomMessagesErrors } from "../errors/CustomMessagesErrors";

export interface ValidateResult {
  success: boolean;
  message?: Array<string | CustomMessagesErrors>;
}
export interface ValidateArguments {
  propName: string;
  propValue: any;
}

type ArgumentCollection = ValidateArguments[];

export default class Validate {
  static validEmail(email?: string): ValidateResult {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email!))
      return { success: false, message: [CustomMessagesErrors.INVALID_EMAIL] };

    return { success: true };
  }

  static validPhoneNumber(phoneNumber: string): ValidateResult {
    const regexNumberValidator = /(\(\d{2}\)\s?)?(\d{4,5})-(\d{4})/g;
    if (!regexNumberValidator.test(phoneNumber))
      return { success: false, message: [CustomMessagesErrors.INVALID_PHONE_NUMBER] };

    return { success: true };
  }

  static preventNullOrUndefined(argument: any, argumentName: string): ValidateResult {
    if (argument === null || argument === undefined) {
      return { success: false, message: [`O Argumento '${argumentName}' é nulo ou undefined.`] };
    }

    return { success: true };
  }

  static preventTooManyNullOrUndefined(args: ArgumentCollection): ValidateResult {
    let errors = [];

    for (const arg of args) {
      const result = this.preventNullOrUndefined(arg.propValue, arg.propName);
      if (!result.success) {
        errors.push(result.message?.[0]!);
      }
    }

    return errors.length ? { success: false, message: errors } : { success: true };
  }
}
