import { configureStore } from "@reduxjs/toolkit"
import sidebarSlice from "./reducers/sidebarSlice";
import hamburgerSlice from "./reducers/hamburgerSlice";
import toolbarSlice from "./reducers/toolbarSlice";
import modalSlice from "./reducers/modalSlice";
import documentNameSlice from "./reducers/documentNameSlice";


const store = configureStore({
    reducer: {
        sidebarStore: sidebarSlice,
        hamburgerStore: hamburgerSlice,
        toolbarStore: toolbarSlice,
        modalStateStore: modalSlice,
        documentNameStore: documentNameSlice
    }
})


export default store