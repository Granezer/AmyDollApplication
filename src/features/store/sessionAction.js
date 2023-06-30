export const SET_SESSION_ID = 'SET_SESSION_ID';

export const setSessionId = (sessionId) => ({
  type: SET_SESSION_ID,
  payload: sessionId,
});