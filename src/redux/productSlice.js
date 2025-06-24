import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const url = "https://fakestoreapi.com/products";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await axios.get(`${url}/${productId}`);
    return response.data;
  }
);

const filterProducts = (state) => {
  const { category, priceRange, minRating, search, sortOrder } = state.filters;

  let filtered = state.allProducts.filter((product) => {
    const checkCategory = category === "All" || product.category === category;
    const checkPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const checkRating = product.rating && product.rating.rate >= minRating;
    const checkSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return checkCategory && checkPrice && checkRating && checkSearch;
  });

  if (sortOrder === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  state.filteredProducts = filtered;
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    product: null,
    filters: {
      category: "All",
      priceRange: [0, 1000],
      minRating: 0,
      search: "",
    },
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
      filterProducts(state);
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
      filterProducts(state);
    },
    setMinRating: (state, action) => {
      state.filters.minRating = action.payload;
      filterProducts(state);
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
      filterProducts(state);
    },
    resetFilters: (state) => {
      (state.filters = {
        category: "All",
        priceRange: [0, 1000],
        minRating: 1,
        search: "",
        sortOrder: "default",
      }),
        (state.filteredProducts = state.allProducts);
    },
    setSortOrder: (state, action) => {
      state.filters.sortOrder = action.payload;
      filterProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
        filterProducts(state);
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const {
  setCategory,
  setPriceRange,
  setMinRating,
  setSearch,
  setSortOrder,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
