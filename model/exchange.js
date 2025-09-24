import mongoose from "mongoose";

const ExchangeSchema = new mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // jisne request bheji
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // jisko request gayi
    requesterBook: { type: String, required: true }, // requester ki book
    receiverBook: { type: String, required: true },  // receiver ki book
    status: { 
      type: String, 
      enum: ["pending", "accepted", "rejected", "completed"], 
      default: "pending" 
    },
    meetupLocation: { type: String },
    exchangeDate: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.models.Exchange ||
  mongoose.model("Exchange", ExchangeSchema);
