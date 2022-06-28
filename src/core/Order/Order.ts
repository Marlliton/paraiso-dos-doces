interface OrderProps {
  description?: string;
  finished?: boolean;
}

export default class Order {
  private _props: OrderProps;
  constructor(props: OrderProps) {
    this._props = props;
  }

  get description() {
    return this._props.description;
  }

  get finished() {
    return this._props.finished;
  }

  static createPendingOrder(props: OrderProps): Order {
    return new Order({ ...props, finished: false });
  }

  static createFinishedOrder(props: OrderProps): Order {
    return new Order({ ...props, finished: true });
  }

  clone(newProps: OrderProps) {
    return new Order({ ...this._props, ...newProps });
  }

  toggleStatus() {
    return this._props.finished ? this.finishOrder() : this.pendingOrder();
  }

  finishOrder() {
    return Order.createFinishedOrder({ ...this._props });
  }

  pendingOrder() {
    return Order.createPendingOrder({ ...this._props });
  }
}
