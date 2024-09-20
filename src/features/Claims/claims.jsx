import { createSlice } from "@reduxjs/toolkit";
import { requests } from "../../data/requests";

const initialState = {
  claims: [...requests],
  filteredClaims: [...requests],
  itemsPerPage: 8,
  status: "all",
  searchTerm: "",
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

    toggleStaus: (state, action) => {
      state.status = action.payload;
    },

    toggleSearchTermFilter: (state, action) => {
      state.searchTerm = action.payload;

      if (state.searchTerm) {
        let filterClaims = state.claims.filter(({ name }) =>
          name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );

        if (state.status !== "all") {
          filterClaims = filterClaims.filter(
            ({ status }) => status === state.status
          );
        }

        state.filteredClaims = filterClaims;
      } else {
        if (state.status === "all") {
          state.filteredClaims = [...state.claims];
        } else {
          state.filteredClaims = state.claims.filter(
            ({ status }) => status === state.status
          );
        }
      }
    },
  },
});

export default claimsSlice.reducer;

export const { filterByType, toggleStaus, toggleSearchTermFilter } =
  claimsSlice.actions;
