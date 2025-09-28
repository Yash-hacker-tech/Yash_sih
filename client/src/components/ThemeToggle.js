import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isDark, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/10 dark:bg-cosmic-dark/50 backdrop-blur-md border border-white/20 dark:border-cosmic-space-700/20 hover:bg-white/20 dark:hover:bg-cosmic-space-800/50 transition-all duration-500 transform hover:scale-110 hover:shadow-cosmic-glow group overflow-hidden"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle cosmic theme"
      disabled={isTransitioning}
    >
      {/* Cosmic background gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)'
        }}
        animate={{
          background: isDark 
            ? [
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(217, 70, 239, 0.2) 50%, transparent 70%)',
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
              ]
            : [
                'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)',
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)'
              ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          transform: 'skewX(-15deg)'
        }}
      />

      <motion.div
        className="relative w-6 h-6 z-10"
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: isTransitioning ? 1.2 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sun icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: isDark ? 0 : 1, 
            scale: isDark ? 0 : 1,
            rotate: isDark ? -180 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sun className="w-5 h-5 text-cosmic-cosmic-500" />
          </motion.div>
        </motion.div>
        
        {/* Moon icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={{ 
            opacity: isDark ? 1 : 0, 
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 180
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Moon className="w-5 h-5 text-cosmic-stellar-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating sparkles */}
      <motion.div
        className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-3 h-3 text-cosmic-nebula-400" />
      </motion.div>

      <motion.div
        className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Zap className="w-3 h-3 text-cosmic-aurora-400" />
      </motion.div>

      {/* Cosmic particles */}
      {isTransitioning && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-nebula-400 rounded-full"
              initial={{
                x: 12,
                y: 12,
                opacity: 1,
                scale: 0
              }}
              animate={{
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
                opacity: [1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
