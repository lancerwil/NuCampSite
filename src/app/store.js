import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    user: userReducer,
  }
});
