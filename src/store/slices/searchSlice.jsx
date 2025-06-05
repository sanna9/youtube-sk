import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
    },
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
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// complextiy of the search in arary id O(n) where n is the number of elements in the array
// complextiy of the search in object id O(1) where n is the number of elements in the object
//  O(1) is better than O(n) so we will use object to store the search results
