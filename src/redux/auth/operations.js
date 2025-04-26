import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI, { setAuthorizationToken } from "../../api/api";

export const fetchRegisterUser = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axiosAPI.post("/users/signup", newUser);
      setAuthorizationToken(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchLogInUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosAPI.post("/users/login", credentials);
      setAuthorizationToken(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchLogOutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosAPI.post("/users/logout");
      setAuthorizationToken("");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      setAuthorizationToken(token);
      const { data } = await axiosAPI.get("/users/current");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
  {
    condition(_, thunkAPI) {
      return Boolean(thunkAPI.getState().auth.token);
    },
  }
);
