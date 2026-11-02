import { NextResponse } from 'next/server';
import { uploadImageToCloudinary } from '@/lib/cloudinary';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function POST(request) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadImageToCloudinary(buffer, 'portfolio');

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Image upload failed. Please verify Cloudinary credentials in .env.',
      },
      { status: 500 }
    );
  }
}

