export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = "";
};

export const handleFulfilledFetch = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledGetCarById = (state, { payload }) => {
  state.items = state.items.filter((car) => car.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
