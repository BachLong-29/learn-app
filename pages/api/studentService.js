import axiosClient from './axiosClient';

class StudentAPI {
  getAll = () => {
    const url = '/student';
    return axiosClient.get(url);
  };
  getStudentById = (studentId) => {
    const url = '/student';
    return axiosClient.get(`${url}/${studentId}`);
  };
}
const studentApi = new StudentAPI();
export default studentApi;
