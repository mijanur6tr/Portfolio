import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const postId = parseInt(id, 10);

    const post = isNaN(postId)
      ? await prisma.post.findUnique({ where: { slug: id } })
      : await prisma.post.findUnique({ where: { id: postId } });

    if (!post) {
      return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Fetch post error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch post' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id, 10);
    const body = await request.json();

    const { title, slug, excerpt, content, coverImage, category, tags, readTime, published, featured } = body;

    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content && { content }),
        ...(coverImage !== undefined && { coverImage }),
        ...(category && { category }),
        ...(tags !== undefined && {
          tags: Array.isArray(tags) ? tags : (tags || '').split(',').map((t) => t.trim()).filter(Boolean),
        }),
        ...(readTime && { readTime }),
        ...(published !== undefined && { published }),
        ...(featured !== undefined && { featured }),
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Update post error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id, 10);

    await prisma.post.delete({ where: { id: postId } });

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Delete post error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete post' }, { status: 500 });
  }
}

