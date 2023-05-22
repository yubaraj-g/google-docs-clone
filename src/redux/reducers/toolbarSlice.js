import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expanded: Boolean(true)
}

export const toolbarSlice = createSlice({
    name: 'toolbarSlice',
    initialState,
    reducers: {
        expandToolbar(state, action) {
            state.expanded = action.payload
        }
    }
})


export const toolbarExpanded = state => state.toolbarStore.expanded
export const { expandToolbar } = toolbarSlice.actions
export default toolbarSlice.reducer