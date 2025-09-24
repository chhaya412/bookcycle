import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Exchange from "@/models/Exchange";

export async function GET() {
  try {
    await connectDB();
    const exchanges = await Exchange.find()
      .populate("requester", "name email")
      .populate("receiver", "name email")
      .sort({ createdAt: -1 });
    return NextResponse.json(exchanges);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newExchange = await Exchange.create(body);
    return NextResponse.json({ message: "Exchange request created", exchange: newExchange });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
