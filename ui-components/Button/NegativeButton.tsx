import { CustomButton } from './styles';
import { ReactNode } from 'react';

const NegativeButton = (props: any) => {
  return (
    <CustomButton genre="negative" {...props}>
      {props.children}
    </CustomButton>
  );
};

export default NegativeButton;
