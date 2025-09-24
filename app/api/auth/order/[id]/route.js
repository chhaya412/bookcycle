import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const order = await Order.findById(params.id)
      .populate("book", "title author price")
      .populate("buyer", "name email")
      .populate("seller", "name email");

    if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });
    return NextResponse.json({ order });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedOrder = await Order.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedOrder) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    return NextResponse.json({ message: "Order updated", order: updatedOrder });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deletedOrder = await Order.findByIdAndDelete(params.id);
    if (!deletedOrder) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    return NextResponse.json({ message: "Order cancelled" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
