import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import selectUsersReducer from '../features/users/selectUsersSlice';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    selectedUsers: selectUsersReducer,
  },
});
