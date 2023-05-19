import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ref: null
}

const hamburgerSlice = createSlice({
    name: 'hamburgerRef',
    initialState,
    reducers: {
        getHamburgerSvg(state, action) {
            state.ref = action.payload
        }
    }
})

export const hamburgerSvg = state => state.hamburgerStore.ref
export const { getHamburgerSvg } = hamburgerSlice.actions
export default hamburgerSlice.reducer