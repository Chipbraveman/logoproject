import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessName: "",
  sloganHere: "",
  pickIndustry: [],
  colorPicker: [],
  designType: [],
  logoUrl: "",    //////Betty's addition
  name: "",
  email: "",
};

const sloganSlice = createSlice({
  name: "slogan",
  initialState,
  reducers: {
    setBusinessName(state, action) {
      return {
        ...state,
        businessName: action.payload,
      };
    },
    setSloganHere(state, action) {
      return {
        ...state,
        sloganHere: action.payload,
      };
    },
    setPickIndustry(state, action) {
      return {
        ...state,
        pickIndustry: action.payload,
      };
    },
    setColorPicker(state, action) {
      return {
        ...state,
        colorPicker: action.payload,
      };
    },
    setDesignType(state, action) {
      return {
        ...state,
        designType: action.payload,
      };
    },
    setNameEmail(state, action) {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    },

    /////// start Betty addition
    setLogoUrl(state, action) {
      return {
        ...state,
        logoUrl: action.payload,
      };
    },
    //////// end Betty addition
  },
});

export const {
  setBusinessName,
  setSloganHere,
  setPickIndustry,
  setColorPicker,
  setDesignType,
  setNameEmail,
  setLogoUrl,     //////Betty's addition
} = sloganSlice.actions;
export const sloganReducer = sloganSlice.reducer;
