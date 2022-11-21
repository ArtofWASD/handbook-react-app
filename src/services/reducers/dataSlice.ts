import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchData:any = createAsyncThunk("data/fetchData", async () => {
//   const dbRef = ref(getDatabase());
//   return get(child(dbRef, `/`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       return snapshot.val()
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// });


export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchData.pending, (state: any) => {
  //       state.status = "Loading";
  //     })
  //     .addCase(fetchData.fulfilled, (state: any, action) => {
  //       state.status = "Resolved";
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchData.rejected, (state: any, action) => {
  //       state.status = "False";
  //       state.error = action.payload;
  //     })

  // },
});
export default dataSlice.reducer;