import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL="https://connections-api.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization="";

};

const register = createAsyncThunk("auth/register", async(credentials, thunkAPI) => {
  try {
    const res = await axios.post("users/signup", credentials);
    console.log(res);
    setAuthHeader(res.data.token)
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

const login = createAsyncThunk("auth/login", async(credentials, thunkAPI) => {
  try {
    const res = await axios.post("users/login", credentials);
    console.log(res);
    setAuthHeader(res.data.token)
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

const logout = createAsyncThunk("auth/logout", async(_, thunkAPI) => {
  try {
    const res = await axios.post("users/logout");
    console.log(res);
    clearAuthHeader()
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export {register, login, logout}