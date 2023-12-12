import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65753dbfb2fbb8f6509cf08f.mockapi.io";

export const fetchCars = createAsyncThunk(
  "advert/fetchAll",
  async (_, thuncAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);


export const getCarById = createAsyncThunk(
  "advert/getCarById",
  async (id, thuncAPI) => {
    try {
      const response = await axios.get(`/advert/${id}`);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
