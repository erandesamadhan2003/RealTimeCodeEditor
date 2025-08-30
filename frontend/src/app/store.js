import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slice/authSlice.js";

// PERSIST CONFIG
const persistConfig = {
    key: "root",
    storage,
};

// COMBINE REDUCERS
const rootReducer = combineReducers({
    auth: userReducer,
});

// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer);

// STORE CONFIGURATION
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// PERSISTOR
export const persistor = persistStore(store);
