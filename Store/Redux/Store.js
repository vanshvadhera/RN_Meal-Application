import { configureStore, createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "FavoriteStore",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload.id);
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const storeActions = storeSlice.actions;
const store = configureStore({
  reducer: {
    FavoriteStore: storeSlice.reducer,
  },
});

export default store;
