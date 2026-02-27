import type { RootState } from '..';

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectIsAuthenticating = (state: RootState) =>
  state.auth.isAuthenticating;
