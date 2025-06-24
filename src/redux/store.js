import { configureStore } from "@reduxjs/toolkit";
import serachReducer from "./searchSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    serach: serachReducer,
    products: productReducer,
  },
});
export default store;
