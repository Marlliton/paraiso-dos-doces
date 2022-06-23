export default class Sale {
  private _name: string;
  private _street: string;
  private _num: number;
  private _reference: string;
  private _order: string;
  constructor(
    name: string,
    num: number,
    street: string,
    reference: string,
    order: string
  ) {
    this._name = name;
    this._num = num;
    this._street = street;
    this._reference = reference;
    this._order = order;
  }

  get name() {
    return this._name;
  }

  get num() {
    return this._num;
  }

  get street() {
    return this._street;
  }

  get reference() {
    return this._reference;
  }

  get order() {
    return this._order;
  }
}
