import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...attributes }: Props) => {
  return (
    <input
      {...attributes}
      className={`w-full bg-transparent px-2 text-sm outline-none ${attributes.className}`}
    />
  );
};

export default Input;
