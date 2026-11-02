import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RetroDesktopTrigger } from '@/components/retro/RetroDesktopTrigger';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Mijanur Rahman — Full-Stack Developer & AI Systems Engineer',
  description:
    'Full-stack web developer specializing in Next.js 15, React 19, TypeScript, PostgreSQL (Neon), MongoDB, and AI/RAG architectures. Proven track record in authentication and payment systems.',
  keywords: [
    'Mijanur Rahman',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Software Engineer',
    'KUET',
    'RAG Systems',
    'PostgreSQL Neon',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Mijanur Rahman', url: 'https://github.com/mijanur6tr' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Mijanur Rahman — Full-Stack Developer & AI Systems Engineer',
    description:
      'Explore scalable web apps, authentication architectures, payment systems, and interactive retro desktop simulator.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mijanur Rahman Portfolio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between selection:bg-[#0df69e] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Desktop-exclusive Floating Windows OS Launcher Button */}
        <RetroDesktopTrigger />

        {/* Global Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          theme="dark"
        />
      </body>
    </html>
  );
}

