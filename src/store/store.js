import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "../features/search/redux/searchSlice";
import searchResultsReducer from "../features/search/redux/searchResultsSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
