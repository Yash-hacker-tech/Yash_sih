
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Building, 
  Settings, 
  Calendar,
  LogOut,
  Menu,
  X,
  User,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation, useMousePosition } from '../hooks/useScrollAnimation';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const { scrollY } = useScrollAnimation();
  const { x: mouseX, y: mouseY } = useMousePosition();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, color: 'text-blue-500' },
    { name: 'Batches', href: '/batches', icon: GraduationCap, color: 'text-purple-500' },
    { name: 'Faculty', href: '/faculty', icon: Users, color: 'text-green-500' },
    { name: 'Subjects', href: '/subjects', icon: BookOpen, color: 'text-orange-500' },
    { name: 'Classrooms', href: '/classrooms', icon: Building, color: 'text-red-500' },
    { name: 'Constraints', href: '/constraints', icon: Settings, color: 'text-indigo-500' },
    { name: 'Special Classes', href: '/special-classes', icon: Calendar, color: 'text-pink-500' },
    { name: 'Timetable', href: '/timetable', icon: Calendar, color: 'text-cyan-500' },
  ];

  const handleLogout = async () => {
    await logout();
  };

  const isActive = (path) => location.pathname === path;

  // Mouse shadow effect
  useEffect(() => {
    const updateMouseShadow = () => {
      const elements = document.querySelectorAll('.mouse-shadow');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - elementCenterX, 2) + Math.pow(mouseY - elementCenterY, 2)
        );
        
        const maxDistance = 200;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        if (intensity > 0.1) {
          element.style.boxShadow = `0 0 ${intensity * 30}px rgba(59, 130, 246, ${intensity * 0.4}), 0 0 ${intensity * 60}px rgba(59, 130, 246, ${intensity * 0.2})`;
        } else {
          element.style.boxShadow = '';
        }
      });
    };

    updateMouseShadow();
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-cosmic-light dark:bg-cosmic-dark transition-all duration-500 relative overflow-hidden">
      {/* Cosmic animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary cosmic orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cosmic-space-500/20 to-cosmic-nebula-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cosmic-nebula-500/20 to-cosmic-stellar-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-cosmic-aurora-500/10 to-cosmic-stellar-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-cosmic-cosmic-500/15 to-cosmic-nebula-500/15 rounded-full blur-lg"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary cosmic particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-cosmic-stellar-400/15 to-cosmic-aurora-400/15 rounded-full blur-lg"
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-r from-cosmic-nebula-400/20 to-cosmic-cosmic-400/20 rounded-full blur-md"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 0.7, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating cosmic elements */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-8 h-8 bg-cosmic-nebula-400/30 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-cosmic-stellar-400/40 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            scale: [1, 0.8, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Constellation dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-stellar-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="relative flex-1 flex flex-col max-w-xs w-full bg-white/90 dark:bg-cosmic-dark-800/90 backdrop-blur-md border-r border-white/20 dark:border-cosmic-space-700/20"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-white/10 backdrop-blur-sm"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="p-2 bg-cosmic-gradient rounded-xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h1 className="text-xl font-bold cosmic-gradient-text font-display">TimeTrix</h1>
                      <div className="h-0.5 w-12 bg-cosmic-gradient rounded-full" />
                    </div>
                  </motion.div>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={`${
                            isActive(item.href)
                              ? 'bg-cosmic-gradient text-white shadow-cosmic-glow'
                              : 'text-slate-600 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-cosmic-dark-800/50 hover:text-slate-900 dark:hover:text-slate-100'
                          } group flex items-center px-3 py-3 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 mouse-shadow toggle-effect`}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <Icon className={`mr-4 h-6 w-6 ${isActive(item.href) ? 'text-white' : item.color}`} />
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-white/20 dark:border-slate-700/20 p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{user?.name || 'User'}</p>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{user?.role || 'Scheduler'}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-white/10 dark:hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105"
                    title="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.div 
        className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 flex flex-col min-h-0 bg-white/80 dark:bg-cosmic-dark-800/80 backdrop-blur-md border-r border-white/20 dark:border-cosmic-space-700/20">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <motion.div 
              className="flex items-center flex-shrink-0 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-2 bg-cosmic-gradient rounded-xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-xl font-bold cosmic-gradient-text font-display">TimeTrix</h1>
                  <div className="h-0.5 w-12 bg-cosmic-gradient rounded-full" />
                </div>
              </div>
            </motion.div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'bg-cosmic-gradient text-white shadow-cosmic-glow'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-cosmic-dark-800/50 hover:text-slate-900 dark:hover:text-slate-100'
                      } group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-500 transform hover:scale-105 mouse-shadow toggle-effect`}
                    >
                      <Icon className={`mr-3 h-5 w-5 ${isActive(item.href) ? 'text-white' : item.color}`} />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-white/20 dark:border-slate-700/20 p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{user?.name || 'User'}</p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{user?.role || 'Scheduler'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-white/10 dark:hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <motion.div 
          className="sticky top-0 z-10 lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white/80 dark:bg-cosmic-dark-800/80 backdrop-blur-md border-b border-white/20 dark:border-cosmic-space-700/20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cosmic-space-500 bg-white/10 dark:bg-cosmic-dark-800/50 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 toggle-effect"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mouse-shadow toggle-effect"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
