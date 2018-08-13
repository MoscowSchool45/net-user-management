// Actions
export const API_LOGIN = 'API/LOGIN';
export const API_LOGOUT = 'API/LOGOUT';
export const API_LOGIN_SUCCESS = 'API/LOGIN_SUCCESS';
export const API_LOGIN_FAILED = 'API/LOGIN_FAILED';
export const API_LOGOUT_SUCCESS = 'API/LOGOUT_SUCCESS';

// Action creators
export const apiLogin = (data) => ({type: API_LOGIN, ...data});
export const apiLogout = () => ({type: API_LOGOUT});
export const apiLoginSuccess = (user, role) => ({type: API_LOGIN_SUCCESS, user, role});
export const apiLoginFailed = () => ({type: API_LOGIN_FAILED});
export const apiLogoutSuccess = () => ({type: API_LOGOUT_SUCCESS});
