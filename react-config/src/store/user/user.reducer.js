import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: undefined,
    userName: undefined,
};

const userSlice = createSlice({
    initialState,
    reducers: {
        userToken(state, action) {
            state.token = action.payload.token;
            state.userName = action.payload.userName;
        }
    }

});

export default userSlice;
export const {userToken} = userSlice.actions;