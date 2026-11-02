import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function DELETE(request, { params }) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const msgId = parseInt(id, 10);

    await prisma.contactMessage.delete({ where: { id: msgId } });

    return NextResponse.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    console.error('Delete message error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete message' }, { status: 500 });
  }
}

