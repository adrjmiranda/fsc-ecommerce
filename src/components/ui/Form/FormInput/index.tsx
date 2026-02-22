import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ ...props }: Props) => {
  return (
    <input
      {...props}
      className={`w-full bg-transparent text-sm outline-none ${props.className || ''}`}
    />
  );
};

export default FormInput;
