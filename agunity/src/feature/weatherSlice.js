import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationName: "australia",
};

const weatherSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation(state, action) {
      state.locationName = action.payload;
    },
  },
});

export const { updateLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
