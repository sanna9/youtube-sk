import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API } from "../../utils/constants";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (pageToken = "") => {
    const url = `${YOUTUBE_API}&pageToken=${pageToken}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    nextPageToken: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;

        const newVideos = action.payload.items;

        // ✅ Deduplicate using Map
        const combinedVideos = [...state.videos, ...newVideos];
        const uniqueVideos = Array.from(
          new Map(
            combinedVideos.map((item) => [item?.id?.videoId || item?.id, item])
          ).values()
        );

        state.videos = uniqueVideos;

        state.nextPageToken = action.payload.nextPageToken;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
