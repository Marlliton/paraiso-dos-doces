interface InputFormProps {
  placeholder: string;
  onChange: (data: string) => void;
  value: string;
}

export function InputForm(props: InputFormProps) {
  return (
    <input
      placeholder={props.placeholder}
      type="text"
      className={`
        bg-zinc-500/10 rounded-lg focus:outline-none focus:border-transparent h-9
        w-full md:w-[28rem] focus:ring-2  focus:ring-[#8257E5] ring-offset-2
        ring-offset-zinc-900 px-3 py-6
      `}
      onChange={e => props.onChange(e.target.value)}
      value={props.value}
    />
  );
}
