import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false
}

const sidebarSlice = createSlice({
    name: 'sidebarStates',
    initialState,
    reducers: {
        showSidebar(state, action) {
            state.show = action.payload
        }
    }
})


export const sidebarState = state => state.sidebarStore.show
export const { showSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer