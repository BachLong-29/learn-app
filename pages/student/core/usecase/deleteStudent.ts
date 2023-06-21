import { removeStudentRedux } from 'redux/actions/student.action';
import studentApi from 'pages/api/studentService';
import { useDispatch } from 'react-redux';

export const useDeleteStudent = () => {
    const distpatch = useDispatch();
    
    const execDeleteStudent = async(id: string) => {
        await studentApi.deleteStudent(id);
        distpatch(removeStudentRedux(id));
    }
    return {
        exec: execDeleteStudent,
    }

}