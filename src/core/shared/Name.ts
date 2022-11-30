import Result from "../errors/Result";
import Validate from "./Validate";

interface NameProps {
  name: string;
}

export default class Name {
  private _props: NameProps;
  constructor(props: NameProps) {
    this._props = props;
  }

  get name() {
    return this._props.name;
  }

  get initials() {
    const [first, second] = this.name.split(" ");
    console.log(first, second);
    return (first[0] + second[0]).toUpperCase();
  }

  static create(props: NameProps): Result<Name> {
    const nameErro = Validate.nome<Name>(props.name);

    return nameErro.isFailure ? nameErro : Result.ok<Name>(new Name(props));
  }
}
