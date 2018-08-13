// Actions
export const ALERT_INFO = 'ALERT/INFO';
export const ALERT_WARNING = 'ALERT/WARNING';

// Action creators
export const alertInfo = (text) => ({type: ALERT_INFO, text});
export const alertWarning = (text) => ({type: ALERT_WARNING, text});
