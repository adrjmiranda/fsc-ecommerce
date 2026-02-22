import type { LucideIcon } from 'lucide-react';

type ColorType = 'primary' | 'secondary' | 'default';

type Props = {
  Icon: LucideIcon;
  fill: boolean;
  baseColor: ColorType;
  hoverColor: ColorType;
};

const baseColors: Record<ColorType, string> = {
  default: 'secondary-text',
  primary: 'primary',
  secondary: 'secondary',
};

const hoverColors: Record<ColorType, string> = {
  default: 'secondary-text',
  primary: 'primary',
  secondary: 'secondary',
};

const ButtonIcon = ({ Icon, fill, baseColor, hoverColor }: Props) => {
  const baseColorSelected = baseColors[baseColor];
  const hoverColorSelected = hoverColors[hoverColor];

  return (
    <Icon
      size={16}
      fill={fill ? 'black' : 'none'}
      className={`${fill ? `fill-${baseColorSelected} group-hover:fill-${hoverColorSelected}` : 'fill-none'} text-${baseColorSelected} group-hover:text-${hoverColorSelected} transition-all duration-300 group-hover:scale-115`}
    />
  );
};

export default ButtonIcon;
