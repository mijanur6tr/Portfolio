import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Name, email, and message are required' }, { status: 400 });
    }

    const contact = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
      },
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!', contact }, { status: 201 });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}

