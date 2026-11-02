import prisma from '@/lib/prisma';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import PhilosophyFaqSection from '@/components/sections/PhilosophyFaqSection';
import CtaBannerSection from '@/components/sections/CtaBannerSection';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  let projects = [];
  let posts = [];

  try {
    projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
      take: 6, // Strictly top 6 projects on landing page
    });
  } catch (error) {
    console.error('Error loading projects for home page:', error);
  }

  try {
    posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });
  } catch (error) {
    console.error('Error loading posts for home page:', error);
  }

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection initialProjects={projects} />
      <CapabilitiesSection />
      <EducationSection />
      <BlogPreviewSection initialPosts={posts} />
      <PhilosophyFaqSection />
      <CtaBannerSection />
    </div>
  );
}

