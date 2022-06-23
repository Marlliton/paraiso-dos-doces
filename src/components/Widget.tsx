import { GiWrappedSweet } from "react-icons/gi";
export function Widget() {
  return (
    <div>
      <button
        className={`
        bottom-6 right-6 absolute w-[calc(100%-3rem)] sm:w-auto flex items-center justify-center group bg-[#8257E5] rounded-full overflow-hidden hover:text-zinc-300
          
        `}
      >
        <span className="h-11 w-11 m-2 pl-[2px]">
          <GiWrappedSweet size={40} />
        </span>

        <span
          className={`
          sm:max-w-0 group-hover:max-w-sm font-medium  transition-all sm:group-hover:pr-1  whitespace-nowrap
        `}
        >
          <span>Adicionar Pedido</span>
        </span>
      </button>
    </div>
  );
}
