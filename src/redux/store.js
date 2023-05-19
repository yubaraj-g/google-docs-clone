import { configureStore } from "@reduxjs/toolkit"
import sidebarSlice from "./reducers/sidebarSlice";
import hamburgerSlice from "./reducers/hamburgerSlice";

const store = configureStore({
    reducer: {
        sidebarStore: sidebarSlice,
        hamburgerStore: hamburgerSlice
    }
})

export default store