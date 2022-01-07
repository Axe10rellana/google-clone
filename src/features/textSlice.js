import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textString: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,

  reducers: {
    setTextString: (state, action) => {
      state.textString = action.payload;
    },
  },
});

export const { setTextString } = textSlice.actions;

export const selectTextString = (state) => state.text.textString;

export default textSlice.reducer;
