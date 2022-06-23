export function SearchInput(props: any) {
  return (
    <div
      className={`
       flex justify-center w-full
    `}
    >
      <input
        type="text"
        placeholder="Faça aqui sua busca"
        className={`
        bg-purple-700/40 rounded-lg focus:outline-none focus:border-transparent h-9 
        w-full md:w-[28rem] focus:ring-2  focus:ring-[#8257E5] ring-offset-2
        ring-offset-zinc-900 px-3 py-6 
      `}
      />
    </div>
  );
}
