import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newLead = await Lead.create(data);
    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
