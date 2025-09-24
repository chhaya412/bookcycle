import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Book from "@/models/Book";

export async function GET() {
  try {
    await connectDB();
    const books = await Book.find().populate("seller", "name email");
    return NextResponse.json({ books });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newBook = await Book.create(body);
    return NextResponse.json({ message: "Book added successfully", book: newBook });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
