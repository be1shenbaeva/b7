import { createSlice } from '@reduxjs/toolkit';

interface RegistrationState {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: RegistrationState = {
  loading: false,
  error: null,
  isLoggedIn: false,
};

const RegistrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default RegistrationSlice.reducer;
