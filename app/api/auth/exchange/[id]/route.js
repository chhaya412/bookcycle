import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Exchange from "@/models/Exchange";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const exchange = await Exchange.findById(params.id)
      .populate("requester", "name email")
      .populate("receiver", "name email");
    if (!exchange) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(exchange);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const updated = await Exchange.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Exchange updated", exchange: updated });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deleted = await Exchange.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Exchange cancelled" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
