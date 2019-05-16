import axios from 'axios';

const axiosAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'friends/json',
      'Authorization': `${token}`
    }
  })
}

export default axiosAuth;