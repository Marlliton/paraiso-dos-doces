import Product from "../product/Product";

interface SaleItemProps {
  product: Product;
  quantity: number;
}

export default class SaleItem {
  private _props: SaleItemProps;
  constructor(props: SaleItemProps) {
    this._props = props;
    this._props.quantity = props.quantity ?? 1;
  }

  get product() {
    return this._props.product;
  }

  get quantity() {
    return this._props.quantity;
  }
}
