import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Правильне оголошення та експорт `fetchSwapiData`
export const fetchSwapiData = createAsyncThunk(
    "swapi/fetchSwapiData",
    async () => {
        const response = await axios.get("https://swapi.dev/api/people/");
        return response.data.results;
    }
);

const swapiSlice = createSlice({
    name: "swapi",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearData: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapiData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSwapiData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSwapiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
