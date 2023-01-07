import { useMemo, useState } from 'react';

import EditOutlined from '@ant-design/icons/EditOutlined';
import { Student } from '../../utils/constants';
import StudentModal from '../Modal/StudentModal';

interface Props {
  id: string;
  data: Student[];
}
const EditButton = (props: Props) => {
  const { id, data } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getStudent = useMemo(() => {
    return data.find((item) => item.id === id);
  }, [id, JSON.stringify(data)]);
  console.log({ getStudent });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <EditOutlined onClick={showModal} style={{ cursor: 'pointer' }} />
      <StudentModal
        id={props.id}
        data={getStudent}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default EditButton;
