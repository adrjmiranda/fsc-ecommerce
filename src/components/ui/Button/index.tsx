import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'transparent';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const variantStyle: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
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
      className={`${variantStyle[variant]} ${attributes.className} group`}
    >
      {children}
    </button>
  );
};

export default Button;
