import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

interface AuthState {
  currentUser: User | null;
  isAuthenticating: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isAuthenticating: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticating = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticating = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticating = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
