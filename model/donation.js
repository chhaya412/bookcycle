import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bookTitle: { type: String, required: true },
    author: { type: String },
    condition: { type: String, enum: ["new", "like new", "used", "old"], default: "used" },
    description: { type: String },
    status: { type: String, enum: ["available", "claimed"], default: "available" },
    claimedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickupLocation: { type: String },
    pickupDate: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);
