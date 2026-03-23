import Profile from "../models/Profile.js";

// Get Profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create or Update Profile (Admin)
export const upsertProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, req.body, { new: true });
    } else {
      profile = new Profile(req.body);
      await profile.save();
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};