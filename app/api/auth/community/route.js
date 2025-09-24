import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CommunityPost from "@/models/CommunityPost";

export async function GET() {
  try {
    await connectDB();
    const posts = await CommunityPost.find()
      .populate("user", "name email")
      .populate("comments.user", "name email")
      .sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newPost = await CommunityPost.create(body);
    return NextResponse.json({ message: "Post created", post: newPost });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
