import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_API_LIST,
} from "../../../utils/constants";
import { cacheResults } from "./searchSlice";

// Fetch YouTube search results
export const fetchYouTubeResults = createAsyncThunk(
  "search/fetchYouTubeResults",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const url = `${YOUTUBE_SEARCH_API_LIST}&q=${encodeURIComponent(
        searchTerm
      )}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch YouTube search results");
      }

      const data = await response.json();
      return data.items; // array of video results
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Thunk for search suggestions (autocomplete)

export const fetchSearchSuggestions = createAsyncThunk(
  "search/fetchSearchSuggestions",
  async (searchTerm, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        YOUTUBE_SEARCH_API + encodeURIComponent(searchTerm)
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search suggestions");
      }

      const data = await response.json();
      const suggestions = data[1] || [];


      return { searchTerm, suggestions };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
