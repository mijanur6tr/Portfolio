import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedOnly = searchParams.get('all') !== 'true';

    const posts = await prisma.post.findMany({
      where: publishedOnly ? { published: true } : {},
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error('Fetch posts error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, category, tags, readTime, published, featured } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ success: false, error: 'Title, slug, and content are required' }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || '',
        content,
        coverImage: coverImage || null,
        category: category || 'Engineering',
        tags: Array.isArray(tags) ? tags : (tags || '').split(',').map((t) => t.trim()).filter(Boolean),
        readTime: readTime || '4 min read',
        published: published ?? true,
        featured: featured ?? false,
      },
    });

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to create post' }, { status: 500 });
  }
}

