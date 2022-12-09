import Email from "../shared/Email";
import Entity, { EntityProps } from "../shared/Entity";
import Name from "../shared/Name";
import PhoneNumber from "../shared/PhoneNumber";
import ResultValidator from "../validator/ResultValidator";
import Validate from "../validator/Validate";

interface CustomerProps extends EntityProps {
  name?: string;
  email?: string;
  cellPhone?: string;
  imgUrl?: string;
}

export default class Customer extends Entity<Customer, CustomerProps> {
  private constructor(props: CustomerProps) {
    super(props);
  }

  get name() {
    return this._props.name;
  }
  get $name() {
    return Name.create(this.name!).instance;
  }
  get email() {
    return this._props.email;
  }
  get $email() {
    return Email.create(this.email!).instance;
  }
  get cellPhone() {
    return this._props.cellPhone;
  }

  get $cellPhone() {
    return PhoneNumber.create(this._props.cellPhone!).instance;
  }
  get imgUrl() {
    return this._props.imgUrl;
  }

  static create(props: CustomerProps) {
    const customerProps = Validate.preventTooManyNullOrUndefined([
      { propName: "id", propValue: props.id },
      { propName: "name", propValue: props.name },
      { propName: "email", propValue: props.email },
    ]);

    if (!customerProps.success) {
      return ResultValidator.fail<Customer>(customerProps.message!);
    }
    const emailOrError = Email.create(props.email!);
    const nameOrError = Name.create(props.name!);
    const numberOrError = PhoneNumber.create(props.cellPhone!);
    const hasErrors = ResultValidator.combineErros<any>([emailOrError, nameOrError, numberOrError]);

    if (hasErrors.errors) {
      return ResultValidator.fail<Customer>(hasErrors.errors);
    }
    return ResultValidator.ok<Customer>(new Customer(props));
  }
}
