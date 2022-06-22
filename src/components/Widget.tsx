import { GiWrappedSweet } from "react-icons/gi";
export function Widget() {
  return (
    <div
      className={`
        absolute flex bottom-6 right-6
    `}
    >
      <button
        className={`
          flex group bg-[#8257E5] items-center  rounded-full overflow-hidden
          
        `}
      >
        <span className="h-11 w-11 m-2 pl-[2px]">
          <GiWrappedSweet size={40} />
        </span>
        
        <span
          className={`
          max-w-0 group-hover:max-w-sm font-medium  transition-all group-hover:pr-1  whitespace-nowrap
        `}
        >
          <span>Adicionar Pedido</span>
        </span>
      </button>
    </div>
  );
}
