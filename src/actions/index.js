// authUser.js

export const authUser = (user) => ({
  type: 'AUTH_USER',
  payload: { user }
});