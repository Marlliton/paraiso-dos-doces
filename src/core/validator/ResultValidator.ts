import { CustomMessagesErrors } from "../errors/CustomMessagesErrors";

interface ResultProps<T> {
  isSuccess: boolean;
  errors?: CustomMessagesErrors[];
  value?: T;
}

export default class ResultValidator<T> {
  private _props: ResultProps<T>;
  constructor(props: ResultProps<T>) {
    if (props.isSuccess && props.errors)
      throw new Error("Uma classe não pode ser criada com erros.");
    if (!props.isSuccess && !props.errors)
      throw new Error("Instancia falhou, mas não contém uma msg de erro.");

    this._props = props;
  }

  get isSuccess() {
    return this._props.isSuccess;
  }
  get isFailure() {
    return !this._props.isSuccess;
  }
  get errors() {
    return this._props.errors;
  }
  get instance() {
    if (this.isFailure) throw new Error("Você não pode obter uma instancia com erros.");

    return this._props.value;
  }

  static fail<U>(errors: CustomMessagesErrors[]): ResultValidator<U> {
    return new ResultValidator({ isSuccess: false, errors });
  }

  static ok<U>(value?: U): ResultValidator<U> {
    return new ResultValidator<U>({ isSuccess: true, value });
  }

  static combineErros<U>(results: ResultValidator<U>[]): ResultValidator<U> {
    const errors: CustomMessagesErrors[] = [];
    for (const result of results) {
      if (result.isFailure) errors.push(result.errors?.[0]!);
    }

    if (errors.length) return ResultValidator.fail<U>(errors);
    return ResultValidator.ok<U>();
  }
}
