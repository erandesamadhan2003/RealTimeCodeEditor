import { AUTH_URL } from "@/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";


const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

// LOGIN THUNK
export const login = createAsyncThunk(
    "user/login",
    async (user, { rejectWithValue }) => {

        try {
            const response = await axios.post(`${AUTH_URL}/login`, {
                email: user.email,
                password: user.password,
            });
            if (response.status === 200) {
                toast.success("Login successful");
                return response.data.data;
            }
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// SLICE
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
