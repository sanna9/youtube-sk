import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchSuggestions } from "./searchThunks";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
    history: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToHistory: (state, action) => {
      const query = action.payload;
      if (!state.history.includes(query)) {
        state.history.push(query);
      }
    },
    removeFromHistory: (state, action) => {
      state.history = state.history.filter((item) => item !== action.payload);
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

export const { cacheResults, addToHistory, removeFromHistory } =
  searchSlice.actions;
export default searchSlice.reducer;
