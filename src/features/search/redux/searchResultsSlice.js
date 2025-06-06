import { createSlice } from "@reduxjs/toolkit";
import { fetchYouTubeResults } from "./searchThunks";

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYouTubeResults.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchYouTubeResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(fetchYouTubeResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default searchResultsSlice.reducer;
