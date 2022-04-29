import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";


const store = configureStore({
    reducer: {
        custom: customReducer  // Reducer named custom
    },
});

export default store