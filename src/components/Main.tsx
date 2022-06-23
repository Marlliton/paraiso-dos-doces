import { SearchInput } from "./SearchInput";
import { Widget } from "./Widget";

interface MainProps {
  children?: any;
}

export function Main(props: MainProps) {
  return (
    <div
      className={`
      flex flex-1 text-zinc-400 items-center
      p-3 h-12 flex-col relative w-full
    `}
    >
      <div
        className={`
        flex flex-col items-center w-full
      `}
      >
        <SearchInput />
        {props.children}
      </div>
      <Widget />
    </div>
  );
}
