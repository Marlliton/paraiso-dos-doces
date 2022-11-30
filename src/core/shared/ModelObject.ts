export default abstract class ModelObject<Tipo, TipoProps>  {
  protected _props: TipoProps
  constructor(props: TipoProps) {
    this._props = props
  }

  clone(newProps: TipoProps): Tipo {
    return new (this.constructor as any)({
      ...this._props,
      ...newProps
    }) 
  }

}