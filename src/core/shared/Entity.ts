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
  }

  get id() {
    return this._props.id;
  }
}
