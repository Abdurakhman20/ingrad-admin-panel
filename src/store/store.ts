import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/sessionSlice";
import licenseReducer from "./slices/licenseSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    license: licenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
