export const selectUser = ({ auth }) => auth.user;
export const selectToken = ({ auth }) => auth.token;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectAuthLoading = ({ auth }) => auth.loading;
export const selectAuthError = ({ auth }) => auth.error;
