import axios from 'axios';

// Create an axios instance
const apiConfig = axios.create({
  baseURL: 'https://api.yourservice.com', // replace with your API base URL
  timeout: 10000, // request timeout
});
export default apiConfig;
