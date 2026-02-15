import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import SvLabel from '../imports/SvLabel';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Übersicht' },
    { id: 'projects', label: 'Projekte' },
    { id: 'about', label: 'Über mich' }
  ];

  const handleLogoClick = () => {
    scrollToSection('home');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Confetti particles
  const confettiColors = ['#81006E', '#ff6b9d', '#FFE5EC', '#E5DEFF', '#fbbf24'];
  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    x: Math.random() * 200 - 100,
    y: Math.random() * -200 - 50,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
  }));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 px-[24px] py-[6px] mx-[30px] my-[0px]">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity relative"
          >
            <div className="w-32 h-36">
              <SvLabel />
            </div>
            
            {/* Confetti Animation */}
            {showConfetti && (
              <div className="absolute top-1/2 left-1/2 pointer-events-none">
                {confettiPieces.map((piece) => (
                  <motion.div
                    key={piece.id}
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1, 
                      rotate: 0,
                      scale: piece.scale 
                    }}
                    animate={{ 
                      x: piece.x, 
                      y: piece.y + 400, 
                      opacity: 0,
                      rotate: piece.rotation,
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "easeOut"
                    }}
                    className="absolute w-3 h-3 rounded-sm"
                    style={{ backgroundColor: piece.color }}
                  />
                ))}
              </div>
            )}
          </button>
          
          <div className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors ${
                  activeSection === item.id ? '' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeSection === item.id ? { color: '#81006E' } : {}}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#81006E' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
