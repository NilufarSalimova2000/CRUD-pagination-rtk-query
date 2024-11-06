import { configureStore } from "@reduxjs/toolkit";
import { ApiUser } from "./service/servise";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [ApiUser.reducerPath] : ApiUser.reducer,
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(ApiUser.middleware)
    }
});

setupListeners(store.dispatch)