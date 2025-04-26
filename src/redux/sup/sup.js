export const handlePending = (state) => {
  state.error = null;
  state.loading = true;
};
export const handleError = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
