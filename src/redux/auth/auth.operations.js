import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { STYLE_NOTIFY } from "options/notify";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      setToken(data.token);
      Notify.success(`Welcome`, STYLE_NOTIFY);
      return data;
    } catch (error) {
      Notify.failure(
        "Try again, user with such credentials already exists",
        STYLE_NOTIFY
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      setToken(data.token);
      Notify.success(`Welcome`, STYLE_NOTIFY);
      return data;
    } catch (error) {
      Notify.failure(
        "Please, check your credentials and try again",
        STYLE_NOTIFY
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      setToken(persistedToken);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      Notify.failure("Something went wrong, try again", STYLE_NOTIFY);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) return false;
      return true;
    },
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await instance.post("/users/logout");
    return data;
  } catch (error) {
    Notify.failure("Something went wrong, try again", STYLE_NOTIFY);
    return thunkAPI.rejectWithValue(error.message);
  }
});
