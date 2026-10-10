import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { WindowManagerProvider, useWindowManager } from '../../context/WindowManagerContext';
import { Desktop } from './Desktop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Synchronizes URL routes with Desktop Window state
const RouteSync = () => {
  const location = useLocation();
  const params = useParams();
  const { openWindow } = useWindowManager();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/projects/')) {
      const pid = parseInt(params.id, 10);
      openWindow('projects', { selectedProjectId: pid || null });
    } else if (path === '/projects') {
      openWindow('projects');
    } else if (path === '/contact') {
      openWindow('contact');
    } else if (path === '/about') {
      openWindow('about');
    } else if (path === '/skills') {
      openWindow('skills');
    } else if (path === '/experience') {
      openWindow('experience');
    } else if (path === '/resume') {
      openWindow('resume');
    }
  }, [location.pathname, params.id, openWindow]);

  return null;
};

export const PortfolioDesktopApp = () => {
  return (
    <WindowManagerProvider>
      <RouteSync />
      <Desktop />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </WindowManagerProvider>
  );
};

export default PortfolioDesktopApp;
