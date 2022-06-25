import { Widget } from "./Widget";

interface MainProps {
  children?: any;
  showModal: (show: boolean) => void;
}

export function Main(props: MainProps) {
  return (
    <div
      className={`
      flex flex-1 text-zinc-400 items-center
       flex-col relative w-full  overflow-hidden rounded-lg
    `}
    >
      <div
        className={`
        flex flex-col items-center w-full h-[calc(100%-6rem)] p-3 overflow-scroll
      `}
      >
        {props.children}
      </div>
      <Widget showModal={props.showModal} />
    </div>
  );
}
