interface UserProps {
  name?: string;
  street?: string;
  num?: number;
  reference?: string;
}

export default class User {
  private _props: UserProps;
  constructor(props: UserProps) {
    this._props = props;
  }

  get name() {
    return this._props.name;
  }

  get num() {
    return this._props.num;
  }

  get street() {
    return this._props.street;
  }

  get reference() {
    return this._props.reference;
  }
}
