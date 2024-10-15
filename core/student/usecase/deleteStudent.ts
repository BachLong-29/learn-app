import { removeStudentRedux } from 'redux/actions/student.action';
import studentApi from 'pages/api/studentService';
import { useDispatch } from 'react-redux';

export const useDeleteStudent = () => {
    const dispatch = useDispatch();
    
    const execDeleteStudent = async(id: string) => {
        await studentApi.deleteStudent(id);
        dispatch(removeStudentRedux(id));
    }
    return {
        exec: execDeleteStudent,
    }

}