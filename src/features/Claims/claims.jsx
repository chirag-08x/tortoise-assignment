import { createSlice } from "@reduxjs/toolkit";
import { requests } from "../../data/requests";

const initialState = {
  claims: [...requests],
  filteredClaims: [...requests],
  page: 0,
  itemsPerPage: 8,
  status: "open",
  totalPages: "",
};

const claimsSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    filterClaims: (state, action) => {},
    togglePage: (state, action) => {},
  },
});

export default claimsSlice.reducer;

export const { filterClaims, togglePage } = claimsSlice.actions;
