import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    users: [
    ],
    status: 'idle',
    error: null
};

export const getUsers = createAsyncThunk('users/getUsers', async() => {
    const response = await axios.get('https://immense-bastion-95145.herokuapp.com/api/users');
    return response.data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.concat(action.payload);
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});


export default usersSlice.reducer;

export const selectAllUsers = state => state.users.users;