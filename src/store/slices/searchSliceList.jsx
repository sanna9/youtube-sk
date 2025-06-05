import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_SEARCH_API_LIST } from "../../utils/constants"; // adjust path if needed

export const fetchYouTubeResults = createAsyncThunk(
  "search/fetchYouTubeResults",
  async (searchTerm) => {
    const url = `${YOUTUBE_SEARCH_API_LIST}&q=${encodeURIComponent(
      searchTerm
    )}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube data");
    }

    const data = await response.json();
    console.log("YouTube search results api");
    // data.items is the array of video results
    return data.items;
  }
);

const searchSliceList = createSlice({
  name: "searchSliceList",
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
        state.error = action.error.message;
      });
  },
});

export default searchSliceList.reducer;
