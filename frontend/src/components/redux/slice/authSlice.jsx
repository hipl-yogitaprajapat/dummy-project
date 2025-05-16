import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    message: "",
    // user: null,
    loading: false,
    error: null,
    success: null,
    token: null
}


export const SignupUser = createAsyncThunk("signup", async (registerInfo, { rejectWithValue }) => {

    try {
        const url = "http://localhost:5001/api/auth/signup"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
        const result = await response.json();
           if (!response.ok) {
            return rejectWithValue(result.message);
        }
        return result
    } catch (error) {
        return rejectWithValue(error.message || "Something went wrong");
    }
})

export const LoginUser = createAsyncThunk("login", async (loginInfo, { rejectWithValue }) => {
    try {
        const url = "http://localhost:5001/api/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        const result = await response.json();
       if (!response.ok) {
            return rejectWithValue(result.message);
        }
        return result;
    } catch (error) {
         return rejectWithValue(error.message || "Something went wrong");
    }
})

export const LogoutUser = createAsyncThunk("logout", async (_, { errorMsg }) => {
    try {
        const url = "http://localhost:5001/api/auth/logout";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer${localStorage.getItem("token")}`
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        return errorMsg(error.message || "Something went wrong");
    }
})

export const ForgetPasswordUser = createAsyncThunk("forgetpassword", async (email, { rejectWithValue }) => {
    try {
        const url = "http://localhost:5001/api/auth/forget-password";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })
        const result = await response.json();
        if (!response.ok) {
            return rejectWithValue(result.message || "Reset failed");
        }
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const ResetPasswordUser = createAsyncThunk("resetpassword", async ({ input, id, token }, { rejectWithValue }) => {
    try {
        const url = `http://localhost:5001/api/auth/reset-password/${id}/${token}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
        const result = await response.json();
        if (!response.ok) {
            return rejectWithValue(result.message || "Reset failed");
        }
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


const api = axios.create({
    baseURL: "http://localhost:5001/api/auth/",
    // withCredentials: true,
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearMessages: (state) => {
            state.error = null;
            state.success = null;
            state.message = "";
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(SignupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;

        })
        builder.addCase(SignupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
        })
        builder.addCase(SignupUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;

        })
        builder.addCase(LoginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;

        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.name = action.payload.name;
            state.token = action.payload.jwtToken;
            localStorage.setItem('token', action.payload.jwtToken);
            localStorage.setItem('loggedInUser', action.payload.name);

        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;

        })
        builder.addCase(LogoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;

        })
        builder.addCase(LogoutUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.name = action.payload.name;
            state.token = action.payload.jwtToken;
            localStorage.removeItem("token");
            localStorage.removeItem("loggedInUser");

        })
        builder.addCase(LogoutUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;

        })
        builder.addCase(ForgetPasswordUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;

        })
        builder.addCase(ForgetPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
        })
        builder.addCase(ForgetPasswordUser.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload;
            state.success = false;
        })
        builder.addCase(ResetPasswordUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;

        })
        builder.addCase(ResetPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
        })
        builder.addCase(ResetPasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });
    }
})

export const { clearMessages } = authSlice.actions;
export default authSlice.reducer;