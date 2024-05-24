import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Async thunk for creating a goal
export const createGoal = createAsyncThunk(
    "goals/createGoal",
    async (data, { rejectWithValue }) => {
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
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for reading goals
export const readGoals = createAsyncThunk(
    "goals/readGoals",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
// Async thunk for editing a goal
export const editGoal = createAsyncThunk(
    "goals/editGoal",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals/${id}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for deleting a goal
export const deleteGoal = createAsyncThunk(
    "goals/deleteGoal",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for archiving a goal
export const archiveGoal = createAsyncThunk(
    "goals/archiveGoal",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.put(`https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals/${id}`, { isArchived: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for unarchiving a goal
export const unarchiveGoal = createAsyncThunk(
    "goals/unarchiveGoal",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.put(`https://6644ded4b8925626f8904898.mockapi.io/setgoals/goals/${id}`, { isArchived: false });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Goals slice
const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(readGoals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(readGoals.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(readGoals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteGoal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter(goal => goal.id !== action.payload);
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(archiveGoal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(archiveGoal.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex(goal => goal.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(archiveGoal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(unarchiveGoal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(unarchiveGoal.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex(goal => goal.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(unarchiveGoal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(editGoal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editGoal.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex(goal => goal.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(editGoal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export default goalsSlice.reducer;
