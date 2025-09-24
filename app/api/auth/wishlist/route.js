import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Wishlist from "@/models/Wishlist";

export async function GET(req) {
  try {
    await connectDB();

    // agar user id query se bhejna ho
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user");

    let wishlist;
    if (userId) {
      wishlist = await Wishlist.find({ user: userId }).populate("book");
    } else {
      wishlist = await Wishlist.find().populate("book");
    }

    return NextResponse.json({ wishlist });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const exists = await Wishlist.findOne({ user: body.user, book: body.book });
    if (exists) {
      return NextResponse.json({ message: "Already in wishlist" }, { status: 400 });
    }

    const newItem = await Wishlist.create(body);
    return NextResponse.json({ message: "Added to wishlist", item: newItem });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
