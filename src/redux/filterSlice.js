import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { createFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
