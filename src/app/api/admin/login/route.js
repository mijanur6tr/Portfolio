import { NextResponse } from 'next/server';
import { createAdminToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const expectedEmail = process.env.ADMIN_EMAIL || 'mijanrhdev@gmail.com';
    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin_mijanur_2026';

    if (email === expectedEmail && password === expectedPassword) {
      const token = await createAdminToken({ email });

      const response = NextResponse.json({ success: true, message: 'Logged in successfully' });
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}

