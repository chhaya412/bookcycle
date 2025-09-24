import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Wishlist from "@/models/Wishlist";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const deleted = await Wishlist.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ message: "Removed from wishlist" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
