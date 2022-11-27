import Form from '../../pages/student/create/components/Form';
import { Modal } from 'antd';
import { Student } from '../../utils/constants';

interface Props {
  id?: string;
  isModalOpen: boolean;
  data?: Student;
  handleCancel: () => void;
}

const StudentModal = (props: Props) => {
  const { isModalOpen, data, handleCancel, id } = props;
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form id={id} isEdit={true} data={data} />
      </Modal>
    </>
  );
};

export default StudentModal;
