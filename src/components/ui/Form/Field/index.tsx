import type React from 'react';

import Input from '../Input';
import Label from '../Label';

type LabelProps = React.ComponentPropsWithoutRef<typeof Label>;
type InputProps = React.ComponentPropsWithoutRef<typeof Input>;

type Props = {
  labelProps: LabelProps;
  inputProps: InputProps;
};

const Field = ({ labelProps, inputProps }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label {...labelProps} className="text-sm font-medium" />
      <Input
        {...inputProps}
        className="focus:ring-primary rounded-sm border-none bg-gray-100 px-4 py-3 text-sm ring-1 ring-gray-200 outline-none focus:ring-2"
      />
    </div>
  );
};

export default Field;
