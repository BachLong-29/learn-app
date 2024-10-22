import { CustomButton } from './styles';

const NegativeButton = (props: any) => {
  return (
    <CustomButton genre="negative" {...props}>
      {props.children}
    </CustomButton>
  );
};

export default NegativeButton;
