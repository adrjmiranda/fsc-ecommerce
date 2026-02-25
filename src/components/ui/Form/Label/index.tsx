import type { LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
};

const Label = ({ label, ...attributes }: Props) => {
  return <label {...attributes}>{label}</label>;
};

export default Label;
