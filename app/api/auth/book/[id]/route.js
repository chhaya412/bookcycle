import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Book from "@/models/Book";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const book = await Book.findById(params.id).populate("seller", "name email");
    if (!book) return NextResponse.json({ error: "Book not found" }, { status: 404 });

    return NextResponse.json({ book });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedBook = await Book.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedBook) return NextResponse.json({ error: "Book not found" }, { status: 404 });

    return NextResponse.json({ message: "Book updated", book: updatedBook });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deletedBook = await Book.findByIdAndDelete(params.id);
    if (!deletedBook) return NextResponse.json({ error: "Book not found" }, { status: 404 });

    return NextResponse.json({ message: "Book deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
