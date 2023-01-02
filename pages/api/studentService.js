import axiosClient from './axiosClient';

class StudentAPI {
  getAll = () => {
    const url = '/student';
    return axiosClient.get(url);
  };
}
const studentApi = new StudentAPI();
export default studentApi;
