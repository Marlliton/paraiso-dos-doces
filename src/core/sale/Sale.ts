import User from "../User/User";
import Order from "../Order/Order";

interface SaleProps {
  id?: string;
  user?: User;
  order?: Order;
}

export default class Sale implements SaleProps {
  private _props: SaleProps;
  constructor(props: SaleProps) {
    this._props = props;
  }

  get id() {
    return this._props.id;
  }

  get order() {
    return this._props.order;
  }

  get user() {
    return this._props.user;
  }
}
