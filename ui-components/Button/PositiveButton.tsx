import { CSSProperties, ReactNode } from 'react';

import { CustomButton } from './styles';

type Iprops = {
  children: ReactNode;
  style?: CSSProperties;
};

const PositiveButton = (props: any) => {
  return (
    <CustomButton genre="positive" style={props.style} {...props}>
      {props.children}
    </CustomButton>
  );
};

export default PositiveButton;
