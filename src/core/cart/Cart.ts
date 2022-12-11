import Customer from "../customer/Customer";
import SaleItem from "./SaleItem";

interface CartProps {
  SaleItems: SaleItem[];
  customer: Customer;
  address: string;
}

export default class Cart {
  private _props: CartProps;
  constructor(props: CartProps) {
    this._props = props;
  }

  totalValue() {
    return this._props.SaleItems.map(item => item.product?.value! * item?.quantity).reduce(
      (total, itemValue) => total + itemValue,
      0
    );
  }

  finishSale() {}
}
