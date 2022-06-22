import { SearchInput } from "./SearchInput";

interface MainProps {
  children?: any;
}

export function Main(props: MainProps) {
  return (
    <div
      className={`
      flex flex-1 text-zinc-400 items-center
      p-3 h-12 flex-col 
    `}
    >
      <div className={`
        flex items-center flex-col w-3/5 px-10
      `}>
        <SearchInput />
        {props.children}
      </div>
    </div>
  );
}
