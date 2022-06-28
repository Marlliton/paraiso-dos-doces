import { useState } from "react";
import { InputForm } from "./InputForm";

interface ModalProps {
  onSubmit: (user: any, order: any) => void;
  showModal: (show: boolean) => void;
}

export function Modal(props: ModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setOrder] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [reference, setRef] = useState<string>("");

  function resetState() {
    setName("");
    setOrder("");
    setStreet("");
    setNum("");
    setRef("");
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.onSubmit({ name, street, num, reference }, { description });
    resetState();
  }

  return (
    <div
      className={`
      absolute bg-zinc-900/80 h-screen w-screen p-3 flex justify-center items-center 
      text-zinc-400
    `}
    >
      <div className="w-full md:w-[40rem]">
        <form
          onSubmit={e => handleSubmit(e)}
          className={`
          w-full flex justify-center items-center flex-col p-3 gap-3 bg-zinc-800 max-h-min
          rounded-lg
          `}
        >
          <header className="relative w-full text-center flex flex-col p-3 justify-end">
            <h1 className="font-bold text-3xl pt-3">Novo pedido</h1>
            <button
              type="button"
              className={`
              absolute right-2 top-1 bg-zinc-500/10 p-4 rounded-full w-4 h-4 flex
              justify-center items-center hover:scale-110 cursor-pointer transition-all
            `}
              onClick={() => props.showModal(false)}
            >
              X
            </button>
            <button></button>
          </header>
          <InputForm
            value={name}
            onChange={setName}
            placeholder="Nome do cliente"
          />
          <textarea
            placeholder="Digit aqui o pedido"
            className={`
            resize-none bg-zinc-500/10 rounded-lg focus:outline-none focus:border-transparent 
            w-full md:w-[28rem] focus:ring-2  focus:ring-[#8257E5] ring-offset-2
            ring-offset-zinc-900 px-3 py-6 
            `}
            cols={30}
            rows={5}
            onChange={e => setOrder(e.target.value)}
            value={description}
          ></textarea>
          <InputForm value={street} onChange={setStreet} placeholder="Rua" />
          <InputForm value={num} onChange={setNum} placeholder="Número" />
          <InputForm
            value={reference}
            onChange={setRef}
            placeholder="referência"
          />

          <footer className="w-full md:w-[28rem]">
            <button
              className={`
              w-full p-3 rounded-lg text-zinc-400 font-semibold bg-[#8257e5]
            `}
              type="submit"
            >
              Adicionar Pedido
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
