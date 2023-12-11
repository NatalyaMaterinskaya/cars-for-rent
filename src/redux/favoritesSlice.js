import { createSlice } from "@reduxjs/toolkit";
import { isExist } from "../helpers";

const favoritesInitialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addCar(state, action)  {
        if (isExist(state, action.payload)) {
          alert(`${action.payload.id} is already in favorites.`);
          return;
        }
        state.push(action.payload);
      },
    deleteCar(state, action) {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, deleteCar } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
