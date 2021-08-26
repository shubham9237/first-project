const mongoose = require("mongoose");

const Profile = mongoose.model("Profile", {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    // unique: true,
  },
  profession: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  contactNo: {
    type: Number,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  websitelink: {
    type: String,
  },
  socialLink: [],
  backgroundUrl: { type: String },
  profilrImageUrl: { type: String },
});

module.exports = Profile;
