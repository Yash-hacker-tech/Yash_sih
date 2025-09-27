/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cosmic Dark Theme - Professional Color Palette
        cosmic: {
          // Deep space blues and purples
          space: {
            50: '#f0f4ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
          },
          // Nebula purples and magentas
          nebula: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
            950: '#4a044e',
          },
          // Stellar cyans and teals
          stellar: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
          },
          // Aurora greens
          aurora: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          // Cosmic golds and ambers
          cosmic: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          // Dark matter grays
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Neon colors for cosmic effects
        neon: {
          blue: '#00d4ff',
          purple: '#bf00ff',
          pink: '#ff0080',
          green: '#00ff88',
          cyan: '#00ffff',
          yellow: '#ffff00',
          orange: '#ff8000',
          red: '#ff0040',
        },
        // Legacy codehelp colors for compatibility
        codehelp: {
          blue: '#6366f1',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#22c55e',
          orange: '#f59e0b',
          red: '#ef4444',
          dark: '#0f172a',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-left': 'slideLeft 0.4s ease-out',
        'slide-right': 'slideRight 0.4s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'flip': 'flip 0.6s ease-in-out',
        // Cosmic theme animations
        'cosmic-float': 'cosmicFloat 8s ease-in-out infinite',
        'nebula-pulse': 'nebulaPulse 4s ease-in-out infinite',
        'stellar-glow': 'stellarGlow 3s ease-in-out infinite alternate',
        'aurora-wave': 'auroraWave 6s ease-in-out infinite',
        'cosmic-spin': 'cosmicSpin 20s linear infinite',
        'toggle-slide': 'toggleSlide 0.3s ease-in-out',
        'toggle-rotate': 'toggleRotate 0.3s ease-in-out',
        'cosmic-shimmer': 'cosmicShimmer 3s linear infinite',
        'particle-float': 'particleFloat 12s ease-in-out infinite',
        'galaxy-rotate': 'galaxyRotate 30s linear infinite',
        'constellation-twinkle': 'constellationTwinkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '40%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '60%': { transform: 'perspective(400px) rotateY(-90deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'orange' },
        },
        // Cosmic theme keyframes
        cosmicFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
          '75%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        nebulaPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.6',
            filter: 'blur(0px)'
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.8',
            filter: 'blur(2px)'
          },
        },
        stellarGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.8), 0 0 80px rgba(99, 102, 241, 0.5)',
            filter: 'brightness(1.2)'
          },
        },
        auroraWave: {
          '0%, 100%': { 
            transform: 'translateX(0) scaleY(1)',
            background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(6, 182, 212, 0.3))'
          },
          '25%': { 
            transform: 'translateX(10px) scaleY(1.1)',
            background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.4))'
          },
          '50%': { 
            transform: 'translateX(-5px) scaleY(0.9)',
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5))'
          },
          '75%': { 
            transform: 'translateX(5px) scaleY(1.05)',
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(34, 197, 94, 0.4))'
          },
        },
        cosmicSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        toggleSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        toggleRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        cosmicShimmer: {
          '0%': { 
            transform: 'translateX(-100%) skewX(-15deg)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(200%) skewX(-15deg)',
            opacity: '0'
          },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '25%': { 
            transform: 'translateY(-30px) translateX(20px) rotate(90deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-15px) translateX(-10px) rotate(180deg)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-25px) translateX(15px) rotate(270deg)',
            opacity: '0.9'
          },
        },
        galaxyRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        constellationTwinkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'codehelp-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'card-gradient-dark': 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
        // Cosmic theme gradients
        'cosmic-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #d946ef 50%, #ec4899 75%, #f59e0b 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #ec4899 100%)',
        'stellar-gradient': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #22c55e 0%, #06b6d4 50%, #8b5cf6 100%)',
        'space-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #4a044e 75%, #020617 100%)',
        'cosmic-dark': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'cosmic-light': 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #c7d2fe 100%)',
        'galaxy-gradient': 'radial-gradient(ellipse at center, #6366f1 0%, #8b5cf6 30%, #d946ef 60%, #0f172a 100%)',
        'constellation-gradient': 'conic-gradient(from 0deg at 50% 50%, #6366f1, #8b5cf6, #d946ef, #ec4899, #f59e0b, #6366f1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.3)',
        'codehelp': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'codehelp-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // Cosmic theme shadows
        'cosmic-glow': '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.4), 0 0 90px rgba(99, 102, 241, 0.2)',
        'nebula-glow': '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 75px rgba(139, 92, 246, 0.1)',
        'stellar-glow': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)',
        'aurora-glow': '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.3), 0 0 75px rgba(34, 197, 94, 0.1)',
        'cosmic-neon': '0 0 10px rgba(99, 102, 241, 0.8), 0 0 20px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.2)',
        'galaxy-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.1)',
        'constellation-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(139, 92, 246, 0.1)',
        'toggle-glow': '0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)',
        'particle-glow': '0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}

