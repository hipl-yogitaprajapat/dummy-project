import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    loading: false,
    error: null,
    success: false,
}
const url = import.meta.env.VITE_APP_API_URL;


export const AddClientProject = createAsyncThunk("addclientproject", async (clientProjectInfo, { rejectWithValue }) => {

    try {
        const response = await fetch(url + "client/project", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
             credentials: 'include', 
            body: JSON.stringify(clientProjectInfo)
        })
        console.log(response,"response");
        
        const result = await response.json();
           if (!response.ok) {
            return rejectWithValue(result.message);
        }
        return result
    } catch (error) {
        return rejectWithValue(error.message || "Something went wrong");
    }
})


const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        clearMessages: (state) => {
            state.error = false;
            state.success = false;
            state.message = "";
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(AddClientProject.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.success = false;

        })
        builder.addCase(AddClientProject.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
        })
        builder.addCase(AddClientProject.rejected, (state, action) => {
            state.loading = true
            state.success = false;
            state.error = action.payload;

        })
    }
})

export const { clearMessages } = clientSlice.actions;
export default clientSlice.reducer;



