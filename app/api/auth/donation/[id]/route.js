import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Donation from "@/models/Donation";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const donation = await Donation.findById(params.id)
      .populate("donor", "name email")
      .populate("claimedBy", "name email");
    if (!donation) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(donation);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const updated = await Donation.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Donation updated", donation: updated });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deleted = await Donation.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Donation removed" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
