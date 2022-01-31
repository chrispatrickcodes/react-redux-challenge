import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    selectedUsers: [
    ]
};

const selectedUsersSlice = createSlice({
    name: 'selectedUsers',
    initialState,
    reducers: {
        selectUser(state, action) {
            state.selectedUsers.push(action.payload)
        },
        deselectUser(state, action) {
            state.selectedUsers = state.selectedUsers.filter(u => u.id != action.payload);
        }
    },
});

export const { selectUser, deselectUser } = selectedUsersSlice.actions;

export default selectedUsersSlice.reducer;
