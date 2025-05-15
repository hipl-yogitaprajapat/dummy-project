import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleError, handleSuccess } from "../../../utils";


const initialState = {
    message: "",
    user: null,
    loading: false,
    error: null,
    success: null,
    token:null
}

export const SignupUser = createAsyncThunk("signup", async (registerInfo, { errorMsg }) => {
 
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
        return result
    } catch (error) {
        return errorMsg(error.message || "Something went wrong");
    }
})

export const LoginUser = createAsyncThunk("login", async (loginInfo, { errorMsg }) => {
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
        return result;
    } catch (error) {
          return errorMsg(error.message || "Something went wrong");
    }
})

export const LogoutUser = createAsyncThunk("logout", async (_,{ errorMsg }) => {
    try {
        const url = "http://localhost:5001/api/auth/logout";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization":`Bearer${localStorage.getItem("token")}`
            },
        })
        console.log(response,"response");
        
        const result = await response.json();
        return result;
    } catch (error) {
          return errorMsg(error.message || "Something went wrong");
    }
})

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
            console.log(state, "state");
            console.log(action, "action");
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
            console.log(state,"state");
            console.log(action,"action");
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
    }
})

export const { clearMessages } = authSlice.actions;
export default authSlice.reducer;