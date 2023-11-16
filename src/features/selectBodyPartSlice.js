import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bodyPartName: "",
};

export const selectBodyPartSlice = createSlice({
  name: "selectBodyPart",
  initialState,
  reducers: {
    changeBodyPart: (state, action) => {
      const newBodyPart = action.payload;
      state.bodyPartName = newBodyPart;
    },
  },
});

export const { changeBodyPart } = selectBodyPartSlice.actions;
export default selectBodyPartSlice.reducer;
