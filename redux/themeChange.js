import { createSlice } from '@reduxjs/toolkit';

export const themeChangeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = themeChangeSlice.actions;
export default themeChangeSlice.reducer;
