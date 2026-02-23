import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ ...attributes }: Props) => {
  return (
    <input
      {...attributes}
      className={`w-full bg-transparent text-sm outline-none ${attributes.className}`}
    />
  );
};

export default FormInput;
