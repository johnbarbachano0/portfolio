import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    frontend: [],
    backend: [],
    analyst: [],
    others: [],
    testimonials: [],
  },
};

export const MaintenanceSlice = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    setMaintenance: (state, action) => {
      var data = {};
      action.payload?.map((item) => (data = { ...data, ...item }));
      state.value = data;
    },
  },
});

export const { setMaintenance } = MaintenanceSlice.actions;

export default MaintenanceSlice.reducer;
