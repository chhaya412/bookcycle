import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    condition: { type: String, enum: ["New", "Like New", "Used"], default: "Used" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    college: { type: String },
    description: { type: String },
    image: { type: String }, // image URL (store in public/uploads or cloudinary)
    status: { type: String, enum: ["Available", "Sold"], default: "Available" },
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
