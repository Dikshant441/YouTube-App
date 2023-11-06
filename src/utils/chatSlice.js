import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./contants";

const chatSlice  = createSlice({
    name: "chat",
    initialState :{
        messages: [],
    },
    reducers: {
        addMessage : (state , action) => {
            state.messages.splice( LIVE_CHAT_LIMIT  ,1)
            state.messages.unshift(action.payload);
            //unshift help to push comment from starting
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;