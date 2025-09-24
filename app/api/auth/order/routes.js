import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find()
      .populate("book", "title author price")
      .populate("buyer", "name email")
      .populate("seller", "name email");

    return NextResponse.json({ orders });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newOrder = await Order.create(body);
    return NextResponse.json({ message: "Order created", order: newOrder });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
