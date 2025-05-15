import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./components/redux/slice/authSlice";

const store = configureStore({
 reducer:{
    user:authSlice
 }   
})
export default store;