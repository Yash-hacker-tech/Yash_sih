import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import {
  Building,
  Users,
  CalendarCheck,
  Sparkles,
  Zap,
  Cpu,
  Brain,
  Rocket,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  LogIn,
  UserPlus,
} from "lucide-react";

const features = [
  {
    icon: React.createElement(Building, { className: "w-12 h-12 text-purple-700" }),
    title: "Maximized Classroom Utilization",
    desc: "Quantum-powered room allocation ensuring 100% efficiency with zero conflicts.",
    color: "purple-700",
  },
  {
    icon: React.createElement(Users, { className: "w-12 h-12 text-pink-600" }),
    title: "Balanced Workload",
    desc: "AI-driven faculty distribution with stress-free scheduling algorithms.",
    color: "pink-600",
  },
  {
    icon: React.createElement(CalendarCheck, { className: "w-12 h-12 text-cyan-700" }),
    title: "Adaptive Scheduling",
    desc: "Neural networks handling NEP 2020 and multidisciplinary complexity.",
    color: "cyan-700",
  },
  {
    icon: React.createElement(Sparkles, { className: "w-12 h-12 text-yellow-400" }),
    title: "Optimized Outcomes",
    desc: "Machine learning ensures perfect timetables with cosmic precision.",
    color: "yellow-400",
  },
];

const parameters = [
  "Quantum classroom mapping",
  "Neural batch processing",
  "AI subject optimization",
  "Dynamic class allocation",
  "Smart frequency analysis",
  "Faculty availability matrix",
  "Predictive leave modeling",
  "Priority slot management",
];

const stats = [
  { number: "99.8%", label: "Conflict Resolution", icon: React.createElement(Zap, { className: "w-8 h-8" }), color: "purple-700" },
  { number: "10x", label: "Faster Processing", icon: React.createElement(Cpu, { className: "w-8 h-8" }), color: "pink-600" },
  { number: "100%", label: "Room Utilization", icon: React.createElement(Brain, { className: "w-8 h-8" }), color: "cyan-700" },
  { number: "∞", label: "Possibilities", icon: React.createElement(Rocket, { className: "w-8 h-8" }), color: "yellow-400" },
];

const glowColors = {
  "purple-700": "rgba(104,29,148,0.8)",
  "pink-600": "rgba(204,65,122,0.8)",
  "cyan-700": "rgba(6,182,212,0.8)",
  "yellow-400": "rgba(250,204,21,0.8)",
};

function SectionWrapper({ children, glowColor }) {
  const [hoveredSide, setHoveredSide] = useState(null);
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const distances = {
      left: x,
      right: rect.width - x,
      top: y,
      bottom: rect.height - y,
    };
    const side = Object.entries(distances).reduce((a, b) => (b[1] < a[1] ? b : a))[0];
    setHoveredSide(side);
  };

  const onMouseLeave = () => setHoveredSide(null);

  const styles = {
    left: { boxShadow: `-4px 0 8px -2px ${glowColor}`, borderLeftColor: glowColor },
    right: { boxShadow: `4px 0 8px -2px ${glowColor}`, borderRightColor: glowColor },
    top: { boxShadow: `0 -4px 8px -2px ${glowColor}`, borderTopColor: glowColor },
    bottom: { boxShadow: `0 4px 8px -2px ${glowColor}`, borderBottomColor: glowColor },
  };

  return React.createElement(Tilt, {
    glareEnable: true,
    glareColor: "rgba(255,255,255,0.1)",
    scale: 1.02,
    tiltMaxAngleX: 4,
    tiltMaxAngleY: 4,
    transitionSpeed: 2000,
    className: "w-4/5 mx-auto my-12 rounded-3xl bg-black/90 backdrop-blur-xl relative"
  }, React.createElement("div", {
    ref: ref,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    className: "rounded-3xl p-8 transition-colors duration-300",
    style: {
      background: "rgba(255 255 255 / 0.05)",
      borderStyle: "solid",
      borderWidth: hoveredSide ? "2px" : "0px",
      borderColor: hoveredSide ? glowColor : "transparent",
      transition: "box-shadow 0.3s ease, border-color 0.3s ease, border-width 0.3s ease",
      ...(hoveredSide ? styles[hoveredSide] : {}),
    }
  }, children));
}

export default function FrontPage() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  
  // Section refs for smooth scrolling
  const homeRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const featuresRef = useRef(null);
  const parametersRef = useRef(null);
  const contactRef = useRef(null);
  
  const sections = React.useMemo(() => ({
    home: homeRef,
    problem: problemRef,
    solution: solutionRef,
    features: featuresRef,
    parameters: parametersRef,
    contact: contactRef
  }), [homeRef, problemRef, solutionRef, featuresRef, parametersRef, contactRef]);

  // Smooth scroll function
  const scrollToSection = (sectionName) => {
    const section = sections[sectionName];
    if (section && section.current) {
      section.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionName);
    }
  };

  // Scroll spy effect
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sections).forEach(([sectionName, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionName);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return React.createElement("div", { className: `min-h-screen ${isDark ? 'bg-cosmic-dark-900' : 'bg-cosmic-light-50'} text-white overflow-hidden relative` }, [
    // Navigation
    React.createElement("nav", { 
      key: "nav",
      className: `fixed top-0 left-0 w-full z-50 backdrop-blur-xl ${isDark ? 'bg-cosmic-dark-800/90 border-cosmic-space-700/20' : 'bg-white/90 border-slate-200/20'} border-b shadow-2xl` 
    }, React.createElement("div", { 
      className: "max-w-7xl mx-auto flex justify-between items-center p-4" 
    }, [
      React.createElement(motion.h1, {
        key: "title",
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        className: "text-3xl font-black cosmic-gradient-text"
      }, "🌌 TimeTrix"),
      React.createElement("ul", {
        key: "nav-list",
        className: "flex gap-8 font-semibold items-center"
      }, [
        ...["Home", "Problem", "Solution", "Features", "Parameters", "Contact"].map((item, i) => {
          const sectionKey = item.toLowerCase();
          return React.createElement(motion.li, {
            key: i,
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            whileHover: { 
              scale: 1.1, 
              rotate: [0, -2, 2, 0],
              textShadow: "0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)"
            },
            whileTap: { scale: 0.95 },
            onClick: () => scrollToSection(sectionKey),
            className: `cursor-pointer transition-all duration-500 toggle-effect ${
              activeSection === sectionKey 
                ? 'text-transparent bg-cosmic-gradient bg-clip-text' 
                : 'text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-cosmic-gradient hover:bg-clip-text'
            }`
          }, item);
        }),
        React.createElement(motion.div, {
          key: "auth-buttons",
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.7 },
          className: "flex gap-4 ml-8 items-center"
        }, [
          React.createElement(ThemeToggle, { key: "theme-toggle" }),
          React.createElement(motion.div, {
            key: "login-wrapper",
            whileHover: { 
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              textShadow: "0 0 15px rgba(99, 102, 241, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)"
            },
            whileTap: { scale: 0.95 }
          }, React.createElement(Link, {
            to: "/login",
            className: "frontpage-nav-button login toggle-effect"
          }, [
            React.createElement(LogIn, { key: "login-icon", className: "w-4 h-4" }),
            "Login"
          ])),
          React.createElement(motion.div, {
            key: "register-wrapper",
            whileHover: { 
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              textShadow: "0 0 15px rgba(99, 102, 241, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)"
            },
            whileTap: { scale: 0.95 }
          }, React.createElement(Link, {
            to: "/register",
            className: "frontpage-nav-button register toggle-effect"
          }, [
            React.createElement(UserPlus, { key: "register-icon", className: "w-4 h-4" }),
            "Register"
          ]))
        ])
      ])
    ])),

    // Hero Section
    React.createElement(SectionWrapper, {
      key: "hero",
      glowColor: glowColors["purple-700"]
    }, React.createElement("div", { 
      ref: sections.home,
      className: "pt-32 pb-20 text-center" 
    }, 
      React.createElement(motion.div, {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1 },
        className: "mb-8"
      }, [
        React.createElement("div", { key: "star", className: "text-8xl mb-4 animate-pulse" }, "🌟"),
        React.createElement("h1", {
          key: "main-title",
          className: "text-6xl md:text-8xl font-black leading-tight mb-6"
        }, [
          React.createElement("span", {
            key: "cosmic",
            className: "text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-700 bg-clip-text drop-shadow-[0_0_50px_rgba(104,29,148,0.8)] animate-pulse"
          }, "COSMIC"),
          React.createElement("br", { key: "br1" }),
          React.createElement("span", {
            key: "timetable",
            className: "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          }, "TIMETABLE"),
          React.createElement("br", { key: "br2" }),
          React.createElement("span", {
            key: "scheduler",
            className: "text-transparent bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-600 bg-clip-text drop-shadow-[0_0_50px_rgba(6,182,212,0.8)]"
          }, "SCHEDULER")
        ]),
        React.createElement(motion.p, {
          key: "description",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5, duration: 1 },
          className: "text-xl md:text-3xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-12 drop-shadow-lg"
        }, [
          "Experience the future of scheduling with our ",
          React.createElement("span", {
            key: "highlight",
            className: "text-transparent bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text font-bold"
          }, "AI-powered cosmic engine"),
          " that eliminates conflicts and maximizes efficiency across the universe."
        ]),
        React.createElement(motion.div, {
          key: "stats",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.8, duration: 1 },
          className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
        }, stats.map(({ number, label, icon, color }, i) => 
          React.createElement("div", { key: i, className: "text-center" }, [
            React.createElement("div", {
              key: "icon",
              className: `text-transparent bg-gradient-to-r from-${color} to-${color} bg-clip-text mb-2`
            }, icon),
            React.createElement("div", {
              key: "number",
              className: "text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            }, number),
            React.createElement("div", {
              key: "label",
              className: "text-gray-300 font-semibold"
            }, label)
          ])
        )),
        React.createElement(Link, {
          key: "cta-button",
          to: "/login"
        }, React.createElement(motion.button, {
          whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
          whileTap: { scale: 0.95 },
          className: "px-12 py-6 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-700 font-black text-xl shadow-[0_0_50px_rgba(104,29,148,0.8)] hover:shadow-[0_0_100px_rgba(104,29,148,1)] border-2 border-white/20 transition-all duration-500"
        }, "🚀 LAUNCH COSMIC SCHEDULER"))
      ])
    )),

    // Problem Section
    React.createElement(SectionWrapper, {
      key: "problem",
      glowColor: glowColors["pink-600"]
    }, React.createElement("div", { 
      ref: sections.problem,
      className: "py-20" 
    }, [
      React.createElement(motion.h2, {
        key: "problem-title",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
        className: "text-5xl font-black text-center mb-12 toggle-effect cosmic-gradient-text"
      }, [
        "THE ",
        React.createElement("span", {
          key: "chaos",
          className: "text-transparent bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text drop-shadow-[0_0_30px_rgba(248,113,113,0.8)]"
        }, "CHAOS")
      ]),
      React.createElement(motion.div, {
        key: "problem-content",
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-[0_0_50px_rgba(248,113,113,0.3)]"
      }, React.createElement("p", {
        className: "text-xl text-center text-gray-300 leading-relaxed"
      }, [
        "Manual scheduling creates a ",
        React.createElement("span", {
          key: "black-hole",
          className: "text-red-400 font-bold"
        }, "black hole"),
        " of conflicts, wasted resources, and frustrated users. With NEP 2020's complexity, traditional methods collapse under their own gravitational pull of inefficiency."
      ]))
    ])),

    // Solution Section
    React.createElement(SectionWrapper, {
      key: "solution",
      glowColor: glowColors["cyan-700"]
    }, React.createElement("div", { 
      ref: sections.solution,
      className: "py-20" 
    }, [
      React.createElement(motion.h2, {
        key: "solution-title",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
        className: "text-5xl font-black text-center mb-12 toggle-effect cosmic-gradient-text"
      }, [
        "OUR ",
        React.createElement("span", {
          key: "cosmic-solution",
          className: "text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]"
        }, "COSMIC SOLUTION")
      ]),
      React.createElement(motion.div, {
        key: "solution-content",
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-lg rounded-3xl p-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
      }, React.createElement("p", {
        className: "text-xl text-center text-gray-300 leading-relaxed"
      }, [
        "Our ",
        React.createElement("span", {
          key: "quantum-ai",
          className: "text-green-400 font-bold"
        }, "quantum AI engine"),
        " processes infinite scheduling possibilities instantly, delivering perfectly optimized timetables that adapt to any complexity with cosmic precision and zero conflicts."
      ]))
    ])),

    // Features Section
    React.createElement(SectionWrapper, {
      key: "features",
      glowColor: glowColors["purple-700"]
    }, React.createElement("div", { 
      ref: sections.features,
      className: "py-20" 
    }, [
      React.createElement(motion.h2, {
        key: "features-title",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
        className: "text-5xl font-black text-center mb-16 toggle-effect cosmic-gradient-text"
      }, "COSMIC FEATURES"),
      React.createElement("div", {
        key: "features-grid",
        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      }, features.map(({ icon, title, desc, color }) => 
        React.createElement(motion.div, {
          key: title,
          initial: { opacity: 0, y: 100 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true }
        }, React.createElement(SectionWrapper, {
          glowColor: glowColors[color]
        }, [
          React.createElement("div", {
            key: "icon",
            className: "text-center mb-6"
          }, icon),
          React.createElement("h3", {
            key: "title",
            className: `text-2xl font-black mb-4 text-${color}`
          }, title),
          React.createElement("p", {
            key: "desc",
            className: "text-gray-300"
          }, desc)
        ]))
      ))
    ])),

    // Parameters Section
    React.createElement(SectionWrapper, {
      key: "parameters",
      glowColor: glowColors["pink-600"]
    }, React.createElement("div", { 
      ref: sections.parameters,
      className: "py-20" 
    }, [
      React.createElement(motion.h2, {
        key: "parameters-title",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
        className: "text-5xl font-black text-center mb-16 toggle-effect cosmic-gradient-text"
      }, "QUANTUM PARAMETERS"),
      React.createElement("div", {
        key: "parameters-grid",
        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      }, parameters.map((param, i) => 
        React.createElement(motion.div, {
          key: i,
          initial: { opacity: 0, scale: 0.5 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.6 },
          viewport: { once: true }
        }, React.createElement(SectionWrapper, {
          glowColor: glowColors["pink-600"]
        }, [
          React.createElement(ClipboardCheck, {
            key: "icon",
            className: "w-10 h-10 text-cyan-600 mx-auto mb-4 animate-pulse"
          }),
          React.createElement("p", {
            key: "text",
            className: "text-gray-300 font-semibold leading-relaxed"
          }, param)
        ]))
      ))
    ])),

    // Contact Section
    React.createElement(SectionWrapper, {
      key: "contact",
      glowColor: glowColors["purple-700"]
    }, React.createElement("div", { 
      ref: sections.contact,
      className: "py-20 text-center" 
    }, [
      React.createElement(motion.h2, {
        key: "contact-title",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        whileHover: { scale: 1.05, rotate: [0, -1, 1, 0] },
        className: "text-5xl font-black mb-16 toggle-effect cosmic-gradient-text"
      }, "CONTACT THE COSMOS"),
      React.createElement("div", {
        key: "contact-grid",
        className: "max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6"
      }, [
        { icon: React.createElement(Mail, { className: "w-12 h-12 text-cyan-600 mx-auto" }), title: "Email", text: "cosmic@scheduler.universe" },
        { icon: React.createElement(Phone, { className: "w-12 h-12 text-pink-600 mx-auto" }), title: "Phone", text: "+91 9876543210" },
        { icon: React.createElement(MapPin, { className: "w-12 h-12 text-purple-700 mx-auto" }), title: "Location", text: "NIT Warangal, Earth" },
      ].map((c, i) => 
        React.createElement(motion.div, {
          key: i,
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true }
        }, React.createElement(SectionWrapper, {
          glowColor: glowColors["purple-700"]
        }, [
          React.createElement("div", {
            key: "icon",
            className: "mb-6 animate-bounce"
          }, c.icon),
          React.createElement("h3", {
            key: "title",
            className: "text-2xl font-black mb-4 text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text"
          }, c.title),
          React.createElement("p", {
            key: "text",
            className: "text-gray-300 font-semibold text-lg"
          }, c.text)
        ]))
      ))
    ])),

    // Footer
    React.createElement("footer", {
      key: "footer",
      className: "py-8 text-center border-t border-white/20 bg-black/90 backdrop-blur-xl relative z-10"
    }, React.createElement(motion.p, {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      className: "text-gray-400 text-lg font-semibold"
    }, [
      "© ",
      new Date().getFullYear(),
      " 🌌 Cosmic Timetable Scheduler - ",
      React.createElement("span", {
        key: "powered-by",
        className: "text-transparent bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text"
      }, "Powered by Quantum AI")
    ]))
  ]);
}
