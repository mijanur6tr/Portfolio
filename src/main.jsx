import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioDesktopApp from './components/retro/PortfolioDesktopApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/projects',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/projects/:id',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/contact',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/about',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/skills',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/experience',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '/resume',
    element: <PortfolioDesktopApp />,
  },
  {
    path: '*',
    element: <PortfolioDesktopApp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
