import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/constants';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < BREAKPOINTS.md;
  const isTablet = windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg;
  const isDesktop = windowSize.width >= BREAKPOINTS.lg;
  const isLargeDesktop = windowSize.width >= BREAKPOINTS['2xl'];

  return {
    ...windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
}; 