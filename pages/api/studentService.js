import axiosClient from './axiosClient';

class StudentAPI {
  getAll = () => {
    const url = '/student';
    return axiosClient.get(url);
  };
  getStudentById = (studentId) => {
    const url = `/student/${studentId}`;
    return axiosClient.get(url);
  };
  updateStudent = (studentId, data) => {
    const url = `/student/${studentId}`;
    return axiosClient.put(url, data)
  };
  createStudent = (data) => {
    const url = '/student';
    return axiosClient.post(url, data)
  }
  deleteStudent = (studentId) => {
    const url = `/student/${studentId}`;
    return axiosClient.delete(url)
  }
}
const studentApi = new StudentAPI();
export default studentApi;
