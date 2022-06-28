import Sale from "../core/sale/Sale";
import { AiFillCheckCircle } from "react-icons/ai";

interface SaleProps {
  sale: Sale;
  finishOrder: (id: string) => void;
}

export function Sales(props: SaleProps) {
  return (
    <div
      className={`
      w-full md:w-[40rem] lg:w-[50rem] flex flex-col gap-1 bg-[#8257e52f] p-2 mt-3 rounded-lg relative
    `}
    >
      <div
        className={`
        flex flex-col gap-1 
      `}
      >
        <div>
          Nome do cliente: <strong>{props.sale.user?.name}</strong>
        </div>
        <div>Pedido: {props.sale.order?.description}</div>
        <span className="w-full border-b border-b-zinc-400/20  py-2">
          <h3 className="text-center text-lg font-semibold">endereço</h3>
        </span>
        <div className="pt-2">
          <p>Rua: {props.sale.user?.street}</p>
          <p>Numero: {props.sale.user?.num}</p>
          <p>Referência: {props.sale.user?.reference}</p>
        </div>
      </div>

      <div
        className={`
        py-2 flex justify-end absolute bottom-0 right-2
      `}
      >
        <button
          className={`
          ${
            props.sale.order?.finished ? "completed-button" : "default-button"
          } transition-all
        `}
          disabled={props.sale.order?.finished}
          onClick={() => props.finishOrder(props.sale.id!)}
        >
          <span>
            {props.sale.order?.finished ? (
              <AiFillCheckCircle size={30} />
            ) : (
              <p>Finalizar Pedido</p>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
