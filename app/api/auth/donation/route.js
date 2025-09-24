import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Donation from "@/models/Donation";

export async function GET() {
  try {
    await connectDB();
    const donations = await Donation.find()
      .populate("donor", "name email")
      .populate("claimedBy", "name email")
      .sort({ createdAt: -1 });
    return NextResponse.json(donations);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newDonation = await Donation.create(body);
    return NextResponse.json({ message: "Donation added", donation: newDonation });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
