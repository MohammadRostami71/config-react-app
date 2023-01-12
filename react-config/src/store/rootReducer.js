import { combineReducers } from '@reduxjs/toolkit';


const combinedReducers = combineReducers({});

const rootReducer = (state, action) => {
    return combinedReducers(state, action);
};

export default rootReducer;