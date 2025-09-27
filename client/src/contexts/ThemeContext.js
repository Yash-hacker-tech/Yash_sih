import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply dark class to html element for Tailwind CSS
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Add cosmic transition effects
    setIsTransitioning(true);
    document.body.classList.add('cosmic-theme-transition');
    
    // Add cosmic particle effect during transition
    if (theme === 'dark') {
      createCosmicTransitionEffect();
    }
    
    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      document.body.classList.remove('cosmic-theme-transition');
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [theme]);

  const createCosmicTransitionEffect = () => {
    // Create floating particles during theme transition
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'cosmic-particle';
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: cosmicParticleFloat 2s ease-out forwards;
      `;
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 2000);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isTransitioning,
    // Theme-specific utilities
    getThemeColors: () => {
      if (theme === 'dark') {
        return {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#d946ef',
          background: '#0f172a',
          surface: '#1e293b',
          text: '#f8fafc',
          textSecondary: '#cbd5e1',
        };
      }
      return {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#d946ef',
        background: '#f8fafc',
        surface: '#ffffff',
        text: '#0f172a',
        textSecondary: '#475569',
      };
    },
    getCosmicGradient: () => {
      return theme === 'dark' 
        ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #d946ef 50%, #ec4899 75%, #f59e0b 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #c7d2fe 100%)';
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
