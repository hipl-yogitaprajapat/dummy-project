import express from "express";
import { checkAuth, forgetpassword, login, logout, resetpassword, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",logout)
router.post("/forget-password",forgetpassword)
router.post("/reset-password/:id/:token",resetpassword)
router.get("/check",protectRoute,checkAuth)

export default router