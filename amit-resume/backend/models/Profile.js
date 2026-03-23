import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  currentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
  professionalSummary: { type: String, required: true },
  education: [
    {
      degree: String,
      college: String,
      year: String,
      score: String,
    }
  ],
}, { timestamps: true });

export default mongoose.model("Profile", ProfileSchema);