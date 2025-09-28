/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary cosmic theme colors
        primary: {
          50: '#0a0a0f',
          100: '#1a1a2e',
          200: '#16213e',
          300: '#1e3a8a',
          400: '#3b82f6',
          500: '#6366f1',
          600: '#8b5cf6',
          700: '#a855f7',
          800: '#c084fc',
          900: '#d8b4fe',
          950: '#f3e8ff',
        },
        // Cosmic secondary colors
        secondary: {
          50: '#020617',
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
          500: '#64748b',
          600: '#94a3b8',
          700: '#cbd5e1',
          800: '#e2e8f0',
          900: '#f1f5f9',
          950: '#f8fafc',
        },
        // Enhanced accent colors for cosmic theme
        accent: {
          50: '#4a044e',
          100: '#701a75',
          200: '#86198f',
          300: '#a21caf',
          400: '#c026d3',
          500: '#d946ef',
          600: '#e879f9',
          700: '#f0abfc',
          800: '#f5d0fe',
          900: '#fae8ff',
          950: '#fdf4ff',
        },
        // Status colors optimized for dark theme
        success: {
          50: '#052e16',
          100: '#14532d',
          200: '#166534',
          300: '#15803d',
          400: '#16a34a',
          500: '#22c55e',
          600: '#4ade80',
          700: '#86efac',
          800: '#bbf7d0',
          900: '#dcfce7',
          950: '#f0fdf4',
        },
        warning: {
          50: '#451a03',
          100: '#78350f',
          200: '#92400e',
          300: '#b45309',
          400: '#d97706',
          500: '#f59e0b',
          600: '#fbbf24',
          700: '#fcd34d',
          800: '#fde68a',
          900: '#fef3c7',
          950: '#fffbeb',
        },
        error: {
          50: '#450a0a',
          100: '#7f1d1d',
          200: '#991b1b',
          300: '#b91c1c',
          400: '#dc2626',
          500: '#ef4444',
          600: '#f87171',
          700: '#fca5a5',
          800: '#fecaca',
          900: '#fee2e2',
          950: '#fef2f2',
        },
        // Enhanced neon colors for cosmic effects
        neon: {
          blue: '#00d4ff',
          purple: '#bf00ff',
          pink: '#ff0080',
          green: '#00ff88',
          cyan: '#00ffff',
          yellow: '#ffff00',
          orange: '#ff8000',
          red: '#ff0040',
          violet: '#8a2be2',
          magenta: '#ff00ff',
          lime: '#32cd32',
          coral: '#ff7f50',
        },
        // Cosmic brand colors
        cosmic: {
          deep: '#0a0a0f',
          void: '#020617',
          nebula: '#1e293b',
          starlight: '#6366f1',
          aurora: '#8b5cf6',
          galaxy: '#d946ef',
          plasma: '#ec4899',
          solar: '#f59e0b',
          comet: '#06b6d4',
          meteor: '#22c55e',
        },
        // Dark theme optimized background variants
        background: {
          primary: '#0a0a0f',
          secondary: '#020617',
          tertiary: '#1e293b',
          accent: '#334155',
        },
        // Text colors for cosmic theme
        text: {
          primary: '#f8fafc',
          secondary: '#e2e8f0',
          muted: '#94a3b8',
          accent: '#c084fc',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'monospace'],
        'cosmic': ['Orbitron', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        // Basic animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-slow': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-left': 'slideLeft 0.4s ease-out',
        'slide-right': 'slideRight 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'zoom-in': 'zoomIn 0.4s ease-out',
        'flip': 'flip 0.8s ease-in-out',
        
        // Enhanced floating and movement
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spinReverse 2s linear infinite',
        
        // Cosmic-themed animations
        'cosmic-float': 'cosmicFloat 8s ease-in-out infinite',
        'cosmic-float-alt': 'cosmicFloatAlt 10s ease-in-out infinite',
        'nebula-pulse': 'nebulaPulse 4s ease-in-out infinite',
        'stellar-glow': 'stellarGlow 3s ease-in-out infinite alternate',
        'aurora-wave': 'auroraWave 6s ease-in-out infinite',
        'cosmic-spin': 'cosmicSpin 20s linear infinite',
        'cosmic-shimmer': 'cosmicShimmer 3s linear infinite',
        'particle-float': 'particleFloat 12s ease-in-out infinite',
        'galaxy-rotate': 'galaxyRotate 30s linear infinite',
        'constellation-twinkle': 'constellationTwinkle 2s ease-in-out infinite',
        'stardust-fall': 'stardustFall 8s linear infinite',
        'cosmic-breath': 'cosmicBreath 4s ease-in-out infinite',
        'plasma-flow': 'plasmaFlow 5s ease-in-out infinite',
        'void-pulse': 'voidPulse 3s ease-in-out infinite',
        
        // Glow effects
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-intense': 'glowIntense 1.5s ease-in-out infinite alternate',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
        'cosmic-glow': 'cosmicGlow 3s ease-in-out infinite alternate',
        
        // Gradient animations
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        'gradient-cosmic': 'gradientCosmic 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'shimmer-cosmic': 'shimmerCosmic 3s linear infinite',
        
        // Text animations
        'typing': 'typing 3.5s steps(40, end), blinkCaret 0.75s step-end infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        // Basic keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '40%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '60%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0)' }
        },
        
        // Movement keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        
        // Cosmic-themed keyframes
        cosmicFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
          '75%': { transform: 'translateY(-15px) rotate(2deg)' }
        },
        cosmicFloatAlt: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) translateX(10px) rotate(3deg)' },
          '66%': { transform: 'translateY(-5px) translateX(-8px) rotate(-2deg)' }
        },
        nebulaPulse: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '0.6', 
            filter: 'blur(0px) hue-rotate(0deg)' 
          },
          '50%': { 
            transform: 'scale(1.2)', 
            opacity: '0.8', 
            filter: 'blur(2px) hue-rotate(180deg)' 
          }
        },
        stellarGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.3)', 
            filter: 'brightness(1)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(99,102,241,0.8), 0 0 80px rgba(99,102,241,0.5)', 
            filter: 'brightness(1.2)' 
          }
        },
        auroraWave: {
          '0%, 100%': { 
            transform: 'translateX(0) scaleY(1)', 
            background: 'linear-gradient(45deg, rgba(34,197,94,0.3), rgba(6,182,212,0.3))' 
          },
          '25%': { 
            transform: 'translateX(10px) scaleY(1.1)', 
            background: 'linear-gradient(45deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4))' 
          },
          '50%': { 
            transform: 'translateX(-5px) scaleY(0.9)', 
            background: 'linear-gradient(45deg, rgba(139,92,246,0.5), rgba(236,72,153,0.5))' 
          },
          '75%': { 
            transform: 'translateX(5px) scaleY(1.05)', 
            background: 'linear-gradient(45deg, rgba(236,72,153,0.4), rgba(34,197,94,0.4))' 
          }
        },
        cosmicSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        cosmicShimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        particleFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' }
        },
        galaxyRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        constellationTwinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        stardustFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        cosmicBreath: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' }
        },
        plasmaFlow: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
            transform: 'rotate(0deg)' 
          },
          '50%': { 
            background: 'linear-gradient(45deg, #d946ef, #ec4899)',
            transform: 'rotate(180deg)' 
          }
        },
        voidPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 0 20px rgba(99, 102, 241, 0)',
            transform: 'scale(1.1)' 
          }
        },
        
        // Glow effects
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99,102,241,0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(99,102,241,0.8), 0 0 30px rgba(99,102,241,0.6)' }
        },
        glowIntense: {
          '0%': { boxShadow: '0 0 10px rgba(99,102,241,0.6)' },
          '100%': { boxShadow: '0 0 30px rgba(99,102,241,1), 0 0 50px rgba(99,102,241,0.8)' }
        },
        neonGlow: {
          '0%': { textShadow: '0 0 5px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' }
        },
        cosmicGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(99,102,241,0.4), 0 0 40px rgba(139,92,246,0.3)', 
            filter: 'hue-rotate(0deg)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(217,70,239,0.4)', 
            filter: 'hue-rotate(90deg)' 
          },
          '100%': { 
            boxShadow: '0 0 25px rgba(217,70,239,0.5), 0 0 50px rgba(236,72,153,0.3)', 
            filter: 'hue-rotate(180deg)' 
          }
        },
        
        // Gradient animations
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        gradientY: {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' }
        },
        gradientXY: {
          '0%, 100%': { 'background-position': '0% 0%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '75%': { 'background-position': '0% 100%' }
        },
        gradientCosmic: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        shimmerCosmic: {
          '0%': { 
            transform: 'translateX(-100%) rotate(0deg)', 
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' 
          },
          '50%': { 
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' 
          },
          '100%': { 
            transform: 'translateX(100%) rotate(10deg)', 
            background: 'linear-gradient(90deg, transparent, rgba(217,70,239,0.4), transparent)' 
          }
        },
        
        // Text animations
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blinkCaret: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#f59e0b' }
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px rgba(99,102,241,0.5)' },
          '100%': { textShadow: '0 0 15px rgba(99,102,241,0.8), 0 0 25px rgba(139,92,246,0.6)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Cosmic gradients
        'cosmic-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #d946ef 50%, #ec4899 75%, #f59e0b 100%)',
        'cosmic-gradient-alt': 'linear-gradient(45deg, #0a0a0f 0%, #1e293b 25%, #6366f1 50%, #8b5cf6 75%, #d946ef 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #ec4899 100%)',
        'stellar-gradient': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #22c55e 0%, #06b6d4 50%, #8b5cf6 100%)',
        'plasma-gradient': 'linear-gradient(135deg, #d946ef 0%, #ec4899 50%, #f59e0b 100%)',
        'void-gradient': 'linear-gradient(135deg, #020617 0%, #0a0a0f 50%, #1e293b 100%)',
        'space-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #4a044e 75%, #020617 100%)',
        'galaxy-gradient': 'radial-gradient(ellipse at center, #6366f1 0%, #8b5cf6 30%, #d946ef 60%, #020617 100%)',
        'starfield-gradient': 'radial-gradient(circle at 20% 80%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 40% 40%, #d946ef 0%, transparent 50%)',
        
        // Animated gradients
        'cosmic-animated': 'linear-gradient(-45deg, #6366f1, #8b5cf6, #d946ef, #ec4899)',
        'nebula-animated': 'linear-gradient(-45deg, #8b5cf6, #d946ef, #ec4899, #f59e0b)',
        'aurora-animated': 'linear-gradient(-45deg, #22c55e, #06b6d4, #8b5cf6, #d946ef)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '400%': '400% 400%',
        '300%': '300% 300%',
        '200%': '200% 200%',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'neon-xl': '0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
        'cosmic-glow': '0 0 30px rgba(99,102,241,0.6), 0 0 60px rgba(99,102,241,0.4), 0 0 90px rgba(99,102,241,0.2)',
        'cosmic-glow-lg': '0 0 40px rgba(99,102,241,0.7), 0 0 80px rgba(139,92,246,0.5), 0 0 120px rgba(217,70,239,0.3)',
        'nebula': '0 0 25px rgba(139,92,246,0.6), 0 0 50px rgba(217,70,239,0.4)',
        'stellar': '0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(59,130,246,0.4)',
        'aurora': '0 0 15px rgba(34,197,94,0.6), 0 0 30px rgba(6,182,212,0.4)',
        'plasma': '0 0 35px rgba(217,70,239,0.7), 0 0 70px rgba(236,72,153,0.5)',
        'inner-glow': 'inset 0 0 20px rgba(99,102,241,0.3)',
        'inner-cosmic': 'inset 0 0 30px rgba(99,102,241,0.4), inset 0 0 60px rgba(139,92,246,0.2)',
      },
      dropShadow: {
        'neon': '0 0 10px currentColor',
        'cosmic': '0 0 15px rgba(99,102,241,0.7)',
        'nebula': '0 0 12px rgba(139,92,246,0.6)',
        'stellar': '0 0 8px rgba(6,182,212,0.8)',
      },
      blur: {
        'xs': '2px',
        '4xl': '72px',
        '5xl': '96px',
        '6xl': '128px',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
        '5xl': '96px',
        '6xl': '128px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'filter': 'filter',
        'backdrop': 'backdrop-filter',
        'all': 'all',
      },
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'cosmic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.cosmic-bg': {
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1e293b 25%, #6366f1 50%, #8b5cf6 75%, #d946ef 100%)',
        },
        '.nebula-bg': {
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)',
        },
        '.starfield-bg': {
          background: `
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(99,102,241,0.6), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(139,92,246,0.4), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(217,70,239,0.5), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(236,72,153,0.3), transparent),
            linear-gradient(135deg, #0a0a0f 0%, #020617 100%)
          `,
        },
        '.text-cosmic': {
          background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-nebula': {
          background: 'linear-gradient(45deg, #8b5cf6, #d946ef, #ec4899)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass-cosmic': {
          background: 'rgba(99, 102, 241, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
        },
        '.glass-nebula': {
          background: 'rgba(139, 92, 246, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
        },
        '.cosmic-border': {
          border: '1px solid transparent',
          'background-clip': 'padding-box',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            'z-index': '-1',
            margin: '-1px',
            'border-radius': 'inherit',
            background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)',
          }
        },
      }
      addUtilities(newUtilities)
    }
  ],
}