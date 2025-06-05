import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const fetchYouTubeResults = createAsyncThunk(
  "search/fetchYouTubeResults",
  async (searchTerm) => {
    const response = await fetch(
      "https://www.youtube.com/youtubei/v1/search?key=YOUR_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Visitor-Id": "YOUR_VISITOR_ID",
          "X-Youtube-Client-Name": "1",
          "X-Youtube-Client-Version": "2.20240601.00.00",
        },
        body: JSON.stringify({
          context: {
            client: {
              clientName: "WEB",
              clientVersion: "2.20240601.00.00",
            },
          },
          query: searchTerm,
        }),
      }
    );

    const data = await response.json();
    return data;
  }
);

// Slice
const searchSliceList = createSlice({
  name: "search",
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchYouTubeResults.pending, (state) => {
        state.status = "loading";
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
