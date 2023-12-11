import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCars, getCarById} from "./operations";
import {
  handlePending,
  handleFulfilled,
  handleFulfilledFetch,
  handleFulfilledGetCarById,
  handleRejected,
} from "./reducers";

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [fetchCars, getCarById];

const addStatus = (status) => arrThunks.map((item) => item[status]);

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchCars.fulfilled, handleFulfilledFetch)
      .addCase(getCarById.fulfilled, handleFulfilledGetCarById)
      .addMatcher(isAnyOf(...addStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...addStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...addStatus(REJECTED)), handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
