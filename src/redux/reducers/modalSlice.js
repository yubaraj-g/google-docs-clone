import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false
}

export const modalSlice = createSlice({
    name: 'modal_slice',
    initialState,
    reducers: {
        changeModalState(state, action) {
            state.modal = action.payload
        }
    }
})


export const modalState = state => state.modalStateStore.modal
export const { changeModalState } = modalSlice.actions
export default modalSlice.reducer