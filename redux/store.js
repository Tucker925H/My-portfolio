import { configureStore } from '@reduxjs/toolkit';
import themeChangeSlice from './themeChange';

export const store = configureStore({
  reducer: {
    changeTheme: themeChangeSlice,
  },
});
