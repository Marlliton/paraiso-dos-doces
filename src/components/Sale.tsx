import Sale from "../core/sale/Sale";

interface SaleProps {
  sale: Sale;
}

export function Sales(props: SaleProps) {
  return (
    <div
      className={`
      w-full md:w-[40rem] lg:w-[50rem] flex flex-col gap-1 bg-[#8257e52f] p-2 mt-3 rounded-lg 
    `}
    >
      <div
        className={`
        flex flex-col gap-1
      `}
      >
        <div>
          Nome do cliente: <strong>{props.sale.name}</strong>
        </div>
        <div>Pedido: {props.sale.order}</div>
        <span className="w-full border-b border-b-zinc-400/20  py-2">
          <h3 className="text-center text-lg font-semibold">endereço</h3>
        </span>
        <div className="pt-2">
          <p>Rua: {props.sale.street}</p>
          <p>Numero: {props.sale.num}</p>
          <p>Referência: {props.sale.reference}</p>
        </div>
      </div>
    </div>
  );
}
