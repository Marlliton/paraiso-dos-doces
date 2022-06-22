import { BiCookie } from "react-icons/bi";

export function Header() {
  return (
    <div className={`
      flex gap-1 text-2xl font-bold text-zinc-400 items-center
      px-14 h-20
    `}>
      <h1>Paraíso dos doces</h1>
      <BiCookie size="1.5rem" className="text-yellow-700" />
    </div>
  );
}
