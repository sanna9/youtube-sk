import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchSuggestions } from "./searchThunks";

const searchSuggestionsSlice = createSlice({
  name: "searchSuggestion",
  initialState: {
    cache: {},
    status: "idle",
    error: null,
  },
  reducers: {
    removeFromCache: (state, action) => {
      delete state.cache[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchSuggestions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        const { searchTerm, suggestions } = action.payload;
        state.cache[searchTerm] = suggestions;
        state.status = "succeeded";
      })
      .addCase(fetchSearchSuggestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { removeFromCache } = searchSuggestionsSlice.actions;
export default searchSuggestionsSlice.reducer;
