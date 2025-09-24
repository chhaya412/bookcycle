import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["purchase", "sale", "exchange", "donate"],
      required: true,
    },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
      default: "Pending",
    },
    deliveryMethod: { type: String }, // e.g. Meetup / Courier
    deliveryDetails: { type: String }, // e.g. "Central Library, IIT Delhi"
    expectedDate: { type: String },
    deliveredOn: { type: String },
    trackId: { type: String }, // for courier tracking
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
