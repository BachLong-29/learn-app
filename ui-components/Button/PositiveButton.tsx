import { CustomButton } from './styles';
import { ReactNode } from 'react';

type Iprops = {
  children: ReactNode;
};

const PositiveButton = (props: Iprops) => {
  return <CustomButton genre="positive">{props.children}</CustomButton>;
};

export default PositiveButton;
