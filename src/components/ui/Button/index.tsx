import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'transparent';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const variantStyle: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white px-6 opacity-90 hover:shadow-xl hover:opacity-100 transition-all hover:scale-105 duration-300 py-2 rounded-sm font-light',
  secondary:
    'bg-secondary text-white px-6 opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-300 hover:shadow-xl py-2 rounded-sm font-light',
  transparent: 'bg-transparent',
};

const Button = ({
  children,
  variant = 'transparent',
  ...attributes
}: Props) => {
  return (
    <button
      {...attributes}
      className={`${variantStyle[variant]} ${attributes.className} group uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
