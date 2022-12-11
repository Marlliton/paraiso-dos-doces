import Validate from "../validator/Validate";
import ModelObject from "./ModelObject";

export interface EntityProps {
  id?: string;
}

export default abstract class Entity<Tipo, TipoProps extends EntityProps> extends ModelObject<
  Tipo,
  TipoProps
> {
  constructor(props: TipoProps) {
    super(props);
    this._idVerify(props?.id!);
  }

  get id() {
    return this._props.id;
  }

  private _idVerify(id: string) {
    const idProp = Validate.preventNullOrUndefined(id, "id");
    if (!idProp.success) throw new Error(idProp.message?.[0]);
  }
}
