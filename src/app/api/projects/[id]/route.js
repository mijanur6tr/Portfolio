import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const projectId = parseInt(id, 10);

    const project = isNaN(projectId)
      ? await prisma.project.findUnique({ where: { slug: id } })
      : await prisma.project.findUnique({ where: { id: projectId } });

    if (!project) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error('Fetch project error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch project' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const projectId = parseInt(id, 10);
    const body = await request.json();

    const { title, slug, cardDescription, description, image, previewLink, githubLink, category, technologies, problems, featured, order } = body;

    const project = await prisma.project.update({
      where: { id: projectId },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(cardDescription && { cardDescription }),
        ...(description && { description }),
        ...(image !== undefined && { image }),
        ...(previewLink !== undefined && { previewLink }),
        ...(githubLink !== undefined && { githubLink }),
        ...(category && { category }),
        ...(technologies !== undefined && {
          technologies: Array.isArray(technologies) ? technologies : (technologies || '').split(',').map((t) => t.trim()).filter(Boolean),
        }),
        ...(problems !== undefined && {
          problems: Array.isArray(problems) ? problems : (problems || '').split('\n').map((p) => p.trim()).filter(Boolean),
        }),
        ...(featured !== undefined && { featured }),
        ...(order !== undefined && { order: parseInt(order, 10) }),
      },
    });

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error('Update project error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const isAuth = await isAuthenticatedAdmin();
    if (!isAuth) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const projectId = parseInt(id, 10);

    await prisma.project.delete({ where: { id: projectId } });

    return NextResponse.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete project' }, { status: 500 });
  }
}

