import Entity, { EntityProps } from "../shared/Entity";
import ResultValidator from "../validator/ResultValidator";
import Validate from "../validator/Validate";

interface ProductProps extends EntityProps {
  name?: string;
  value?: number;
  amount?: number;
  description?: string;
}

export default class Product extends Entity<Product, ProductProps> {
  private constructor(props: ProductProps) {
    super(props);
  }

  get name() {
    return this._props.name;
  }
  get value() {
    return this._props.value;
  }
  get amount() {
    return this._props.amount;
  }
  get description() {
    return this._props.description;
  }

  static create(props: ProductProps) {
    const productProps = Validate.preventTooManyNullOrUndefined([
      { propName: "name", propValue: props.name },
      { propName: "value", propValue: props.value },
      { propName: "amount", propValue: props.amount },
      { propName: "description", propValue: props.description },
    ]);

    if (!productProps.success) return ResultValidator.fail<Product>(productProps.message!);

    return ResultValidator.ok<Product>(new Product(props));
  }
}
