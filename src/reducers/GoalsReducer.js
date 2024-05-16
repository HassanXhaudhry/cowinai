import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios';

export const createGoal = createAsyncThunk(
    "createGoal",
    async (data, { isRejectedWithValue }) => {
      try {
        const response = await axios.post(
          "https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
);

export const goalsSlice = createSlice({
    name: 'userGoals',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    buildReducers :{
        [createGoal.pending]: (state) => {
            state.loading = true;
            state.error = null; 
        },
        [createGoal.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createGoal.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});


export default goalsSlice.reducer;