import express from "express"
const router =express.Router()
import { createUser } from "../controllers/userCntrl.js"
router.post("/register",createUser)

export {router as userRoute}