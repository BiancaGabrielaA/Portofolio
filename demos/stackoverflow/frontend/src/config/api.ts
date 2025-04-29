export const API_BASE_URL = 'http://localhost:5050';

export const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  GOOGLE_LOGIN: `${API_BASE_URL}/auth/google`,
  CHECK_AUTH: `${API_BASE_URL}/auth/check-auth`,
  LOGOUT: `${API_BASE_URL}/auth/logout`
};

export default {
  API_BASE_URL,
  API_ROUTES
};
