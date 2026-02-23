import type { LucideIcon } from 'lucide-react';

type ColorType = 'primary' | 'secondary' | 'default';

type Props = {
  Icon: LucideIcon;
  fill: boolean;
  baseColor: ColorType;
  hoverColor: ColorType;
};

const fillStyle: Record<ColorType, string> = {
  default: 'fill-secondary-text',
  primary: 'fill-primary',
  secondary: 'fill-secondary',
};

const fillStyleHover: Record<ColorType, string> = {
  default: 'group-hover:fill-secondary-text',
  primary: 'group-hover:fill-primary',
  secondary: 'group-hover:fill-secondary',
};

const textStyle: Record<ColorType, string> = {
  default: 'text-secondary-text',
  primary: 'text-primary',
  secondary: 'text-secondary',
};

const textStyleHover: Record<ColorType, string> = {
  default: 'group-hover:text-secondary-text',
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
};

const ButtonIcon = ({ Icon, fill, baseColor, hoverColor }: Props) => {
  return (
    <Icon
      size={16}
      fill={fill ? 'black' : 'none'}
      className={`${fill ? `${fillStyle[baseColor]} ${fillStyleHover[hoverColor]}` : 'fill-none'} ${textStyle[baseColor]} ${textStyleHover[hoverColor]} transition-all duration-300 group-hover:scale-115`}
    />
  );
};

export default ButtonIcon;
