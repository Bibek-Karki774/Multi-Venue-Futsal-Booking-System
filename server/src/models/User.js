const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: { type: String, required: true, trim: true },
    role: { type: String, enum: ['player', 'venueOwner', 'admin'], default: 'player'},
  verification: {
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: undefined,
    },
    document: {
      path: String, // storage path or URL
      originalName: String,
      mimeType: String,
      size: Number,
      uploadedAt: Date,
    },
    reviewedAt: Date,
    rejectionReason: String,
  },
   hashedPassword: { type: String, required: true, select: false },
});


const User = mongoose.model("User", userSchema);

module.exports = User;
