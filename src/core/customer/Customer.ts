import Email from "../email/Email";
import Result from "../errors/Result";
import Entity, { EntityProps } from "../shared/Entity";
import Name from "../shared/Name";

interface CustomerProps extends EntityProps {
  name?: Result<Name>;
  email?: Result<Email>;
  cellPhone?: string;
  imgUrl?: string;
}

export default class Customer extends Entity<Customer, CustomerProps> {
  constructor(props: CustomerProps) {
    super(props);
  }

  get name() {
    return this._props.name?.instance?.name;
  }
  get $name() {
    return this._props.name?.instance
  }
  get email() {
    return this._props.email?.instance?.email;
    
  }
  get $email() {
    return this._props.email?.instance;
  }
  get cellPhone() {
    return this._props.cellPhone;
  }
  get imgUrl() {
    return this._props.imgUrl;
  }

  static create(props: CustomerProps) {
    const emailError = props.email;
    const nameError = props.name;
    const hasErrors = Result.combineErros<Customer | Name | Email>([emailError!, nameError!]);

    if (hasErrors.error) return Result.fail<Customer>(hasErrors.error);

    return Result.ok<Customer>(new Customer(props));
  }
}
