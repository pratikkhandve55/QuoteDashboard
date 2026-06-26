import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  priority: "All",
  search: "",
  selectedQuote: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setPriority: (state, action) => {
      state.priority = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    clearFilters: (state) => {
      state.status = "All";
      state.priority = "All";
      state.search = "";
    },
    setSelectedQuote: (state, action) => {
  state.selectedQuote = action.payload;
},
  },
});

export const {
  setStatus,
  setPriority,
  setSearch,
  clearFilters,
  setSelectedQuote,
} = filterSlice.actions;

export default filterSlice.reducer;