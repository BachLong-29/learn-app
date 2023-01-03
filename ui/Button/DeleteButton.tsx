import { DeleteOutlined } from '@ant-design/icons';
import { removeStudentRedux } from '../../redux/actions/student.action';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
}
const DeleteButton = (props: Props) => {
  const { id } = props;
  const dispatch = useDispatch();
  return (
    <>
      <DeleteOutlined
        onClick={() => dispatch(removeStudentRedux(id))}
        style={{ cursor: 'pointer' }}
      />
    </>
  );
};

export default DeleteButton;
