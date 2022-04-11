import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api-constant";

export const fetchData = createAsyncThunk("data/fetchData", async (_, { rejectWithValue }) => {
    return fetch(`${API_URL}/ingredients`)
      .then((response) =>{
          if (response.ok) {
              return response.json()
          }
        throw new Error("Не пришёл ответ от сервера");
      })
      .then((data) => {
        if (data.success) {
          return data.data;
        }
        throw new Error("Данные не поступили");
      })
      .catch((error) => rejectWithValue(error.message));
  });

export const dataSlice = createSlice({
    name: "data",
    initialState:{
        data: []
    }
    
})

export default dataSlice.reducer;