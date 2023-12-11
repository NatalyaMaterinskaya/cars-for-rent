import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filter;

export const selectFavorites = (state) => state.favorites;

export const selectvisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) =>
    cars.filter((car) => car.make.toLowerCase().includes(filter.toLowerCase()))
);
