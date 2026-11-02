import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('Fetch projects error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, cardDescription, description, image, previewLink, githubLink, category, technologies, problems, featured, order } = body;

    if (!title || !slug || !description) {
      return NextResponse.json({ success: false, error: 'Title, slug, and description are required' }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        cardDescription: cardDescription || description.slice(0, 160),
        description,
        image: image || null,
        previewLink: previewLink || null,
        githubLink: githubLink || null,
        category: category || 'Full-Stack Web',
        technologies: Array.isArray(technologies) ? technologies : (technologies || '').split(',').map((t) => t.trim()).filter(Boolean),
        problems: Array.isArray(problems) ? problems : (problems || '').split('\n').map((p) => p.trim()).filter(Boolean),
        featured: featured ?? true,
        order: order ? parseInt(order, 10) : 0,
      },
    });

    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to create project' }, { status: 500 });
  }
}

