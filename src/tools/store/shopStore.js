import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../slice/shopSlice";

const store = configureStore({
    reducer: {
        shop: shopSlice
    }
})

export default store;