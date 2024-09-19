import { configureStore } from "@reduxjs/toolkit";
import ClaimsReducer from "../features/Claims/claims";

// This is our whole state. A container for our whole state.
export const store = configureStore({
  reducer: {
    claims: ClaimsReducer,
  },
});
