interface ResultProps<T> {
  isSuccess: boolean;
  error?: string;
  value?: T;
}

export default class Result<T> {
  private _props: ResultProps<T>;
  constructor(props: ResultProps<T>) {
    if (props.isSuccess && props.error)
      throw new Error("Uma classe não pode ser criada com erros.");
    if (!props.isSuccess && !props.error)
      throw new Error("Instancia falhou, mas não contém uma msg de erro.");

    this._props = props;
  }

  get isSuccess() {
    return this._props.isSuccess;
  }
  get isFailure() {
    return !this._props.isSuccess;
  }
  get error() {
    return this._props.error;
  }
  get instance() {
    if (this.isFailure) throw new Error("Você não pode obter uma instancia com erros.");

    return this._props.value;
  }

  static fail<U>(error: string): Result<U> {
    return new Result({ isSuccess: false, error });
  }

  static ok<U>(value?: U): Result<U> {
    return new Result<U>({ isSuccess: true, value });
  }

  static combineErros<U>(results: Result<U>[]): Result<U> {
    for (const result of results) {
      if (result.isFailure) return result;
    }

    return Result.ok<U>();
  }
}
