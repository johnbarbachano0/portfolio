import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    homeRef: null,
    aboutRef: null,
    contactRef: null,
    expRef: null,
    skillRef: null,
    portfolioRef: null,
    testimonialRef: null,
    footerRef: null,
    currRef: 1,
    hideNav: false,
  },
};

export const RefStoreSlice = createSlice({
  name: "refStore",
  initialState,
  reducers: {
    setRef: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    setCurrRef: (state, action) => {
      state.value.currRef = action.payload;
    },
    setHideNav: (state, action) => {
      state.value.hideNav = action.payload;
    },
  },
});

export const { setRef, setCurrRef, setHideNav } = RefStoreSlice.actions;

export default RefStoreSlice.reducer;
