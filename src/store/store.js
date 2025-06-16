import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchSuggestionReducer from "../features/search/redux/searchSuggestionsSlice";
import searchResultsReducer from "../features/search/redux/searchResultsSlice";
import chatReducer from "../features/LiveChat/redux/chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    searchSuggestion: searchSuggestionReducer,
    searchResults: searchResultsReducer,
    chat: chatReducer,
  },
});

export default store;
