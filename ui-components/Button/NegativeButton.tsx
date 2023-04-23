import { CustomButton } from './styles';
import { ReactNode } from 'react';

type Iprops = {
  children: ReactNode;
};

const NegativeButton = (props: Iprops) => {
  return <CustomButton genre="negative">{props.children}</CustomButton>;
};

export default NegativeButton;
