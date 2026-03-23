import express from "express";
import { getProfile, upsertProfile } from "../controllers/profileController.js";

const router = express.Router();

// Get profile data
router.get("/", getProfile);

// Admin: create/update profile
router.post("/", upsertProfile);

export default router;