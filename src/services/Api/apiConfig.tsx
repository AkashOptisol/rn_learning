import axios from 'axios';
import Config from 'react-native-config';

// Create an axios instance
const apiConfig = axios.create({
  baseURL: Config.Testing_URL, // replace with your API base URL
  timeout: 10000, // request timeout
});
export default apiConfig;
