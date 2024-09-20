import { createSlice } from "@reduxjs/toolkit";
import { requests } from "../../data/requests";

const initialState = {
  claims: [...requests],
  filteredClaims: [...requests],
  itemsPerPage: 8,
  status: "all",
  totalPages: "",
};

const claimsSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    filterByType: (state, action) => {
      if (state.status === "all") {
        state.filteredClaims = [...state.claims];
      } else {
        const filterClaims = state.claims.filter(
          ({ status }) => status === state.status
        );
        state.filteredClaims = filterClaims;
      }
    },
    filterByName: (state, action) => {},
    toggleStaus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default claimsSlice.reducer;

export const { filterByType, toggleStaus, filterByName } = claimsSlice.actions;
