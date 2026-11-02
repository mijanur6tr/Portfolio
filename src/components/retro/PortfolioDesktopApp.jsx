'use client';

import React from 'react';
import { RetroOSOverlay } from './RetroOSOverlay';

export const PortfolioDesktopApp = ({ isOpen = true, onClose = () => {} }) => {
  return <RetroOSOverlay isOpen={isOpen} onClose={onClose} />;
};

export default PortfolioDesktopApp;
