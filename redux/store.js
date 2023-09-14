import { configureStore } from "@reduxjs/toolkit";
// import { generalReducer, onboardingReducer, userReducer } from "./index";
import { generalReducer, sloganReducer } from "./index";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    general: generalReducer,
    slogan: sloganReducer,
    // onboarding: onboardingReducer,
  },
});
