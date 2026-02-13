import axios from "axios";


export const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000",
  withCredentials: true,
});

API.defaults.withCredentials = true;
API.defaults.xsrfCookieName = 'XSRF-TOKEN';
API.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

API.interceptors.response.use(null, async error => {
  if (error.response?.status === 403) {
    await API.get(`/auth/csrf-token`, {
      withCredentials: true
    }).then((res) => {
      const csrfToken = res.data.csrfToken;
      API.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    }).catch((error) => {
      console.error('Error fetching CSRF token:', error);
    });
    return axios(error.config);
  }
  return Promise.reject(error);
});
