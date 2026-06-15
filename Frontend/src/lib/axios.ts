import axios from 'axios';

type ImportMetaEnv = {
  NEXT_PUBLIC_N8N_API_URL?: string;
};

// 📡 Central network helper linked to your local n8n workflow server
const axiosInstance = axios.create({
  baseURL: ((import.meta as ImportMeta & { env?: ImportMetaEnv }).env?.NEXT_PUBLIC_N8N_API_URL) || 'http://localhost:5678',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Automatically drops the call if n8n doesn't reply within 10 seconds
});

export default axiosInstance;