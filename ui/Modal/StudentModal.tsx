import { Modal } from 'antd';
import Form from '../../pages/student/create/components/Form';
import { Student } from '../../utils/constants';

interface Props {
  id?: string;
  isModalOpen: boolean;
  data?: Student;
  handleCancel: () => void;
}

const StudentModal = (props: Props) => {
  const { isModalOpen, data, handleCancel, id } = props;
  console.log({ data });
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
