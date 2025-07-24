// Enhanced version of useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location changed:', location.pathname);
    console.log('Current scroll position before:', window.pageYOffset || document.documentElement.scrollTop);
    
    const scrollToTop = () => {
      // Force scroll to top using multiple methods
      try {
        // Method 1: window.scrollTo with options
        window.scrollTo({ 
          top: 0, 
          left: 0, 
          behavior: 'auto' 
        });
        
        // Method 2: Direct assignment
        window.scrollTo(0, 0);
        
        // Method 3: Document elements
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 4: Manual scroll on main container
        const mainContainer = document.querySelector('main') || document.querySelector('#root') || document.body;
        if (mainContainer) {
          mainContainer.scrollTop = 0;
        }
        
        console.log('Scroll attempted, new position:', window.pageYOffset || document.documentElement.scrollTop);
      } catch (error) {
        console.error('Error scrolling to top:', error);
      }
    };

    // Multiple attempts with different timing
    scrollToTop(); // Immediate
    
    setTimeout(scrollToTop, 0); // Next tick
    setTimeout(scrollToTop, 10); // Small delay
    setTimeout(scrollToTop, 50); // Medium delay
    setTimeout(scrollToTop, 100); // Longer delay
    
    requestAnimationFrame(() => {
      scrollToTop();
      requestAnimationFrame(() => {
        scrollToTop();
        console.log('Final scroll position:', window.pageYOffset || document.documentElement.scrollTop);
      });
    });

  }, [location.pathname]); // Only listen to pathname changes
};