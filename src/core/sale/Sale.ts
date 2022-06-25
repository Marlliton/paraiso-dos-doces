interface SaleProps {
  name?: string;
  street?: string;
  num?: number;
  reference?: string;
  order?: string;
  completed?: boolean;
}

export default class Sale implements SaleProps {
  private _props: SaleProps;
  constructor(props: SaleProps) {
    this._props = props;
  }

  static pendent(props: SaleProps) {
    return new Sale({
      ...props,
      completed: false,
    });
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

  get order() {
    return this._props.order;
  }
}
