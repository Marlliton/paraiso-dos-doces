import { Widget } from "./Widget";

export function Footer() {
  return (
    <div
      className={`
      text-base font-light text-zinc-400 
      p-3 h-12 relative
    `}
    >
      <h1>Colocar alguma informação útil aqui</h1>
      <Widget />
    </div>
  );
}
