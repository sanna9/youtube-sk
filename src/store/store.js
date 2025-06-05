import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import searchSliceList from "./slices/searchSliceList";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchSliceList: searchSliceList,
  },
});
export default store;
