import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

export const documentNameSlice = createSlice({
    name: 'document_name_slice',
    initialState,
    reducers: {
        getDocumentName(state, action) {
            state.name = action.payload
        }
    }
})


export const documentNameRedux = state => state.documentNameStore.name
export const { getDocumentName } = documentNameSlice.actions
export default documentNameSlice.reducer