import axios from "axios"
import { refreshToken } from "../untils/api.admin";

// Add a request interceptor
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    const accessToken = localStorage.getItem("accessToken")
    if(accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => true /* This function returns true */}
);

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response?.data) return response.data;
  return response;
}, async function (error) {
  console.log(error)
  if (error?.response?.data?.messages[0]?.message == 'Token is expired' && !error.config._retry) {
    const originalRequest = error.config;
    error.config._retry = true;
    try {
      const res = await refreshToken();
      if(res && res.access){
        const { access } = res;
        console.log('Access token refreshed successfully');

        localStorage.setItem('token', access);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access}`;
        }
        return axios(originalRequest);
      }
      else{
        console.error('Failed to refresh access token');
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
        return Promise.reject(new Error('Failed to refresh access token'));
      }
    } catch (error) {
      console.error('Refresh token failed:', error);
      localStorage.removeItem('token');
      window.location.href = '/admin/login';
      return Promise.reject(error);
    }
  }

  else if (error?.response?.data) return {
    error: error?.response?.data
  };
  return Promise.reject(error);
});

export default axios;
