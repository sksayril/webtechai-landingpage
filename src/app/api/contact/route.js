import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newContact = await Contact.create(data);
    return NextResponse.json({ success: true, contact: newContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
