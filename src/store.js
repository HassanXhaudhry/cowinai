import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/user.reducer";
import popupReducer from './reducers/PopupReducer';
import GoalsReducer from './reducers/GoalsReducer';

export const store = configureStore({
    reducer: {
      user: userReducer,
      popup: popupReducer,
      goals: GoalsReducer
    },
  })