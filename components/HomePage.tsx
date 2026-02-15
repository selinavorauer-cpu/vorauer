import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { AboutSection } from './AboutSection';
import { WelcomeScreen } from './WelcomeScreen';

export function HomePage() {
  const { scrollY } = useScroll();
  const location = useLocation();
  
  // Scroll to projects section if navigated from project detail
  useEffect(() => {
    if (location.state?.scrollToProjects) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  
  // Parallax effect for background
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="scroll-smooth relative">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-full h-[200vh]"
        >
          <div 
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(129, 0, 110, 0.4) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255, 107, 157, 0.4) 0%, transparent 70%)' }}
          />
        </motion.div>
        
        <motion.div
          style={{ y: y2 }}
          className="absolute top-0 left-0 w-full h-[200vh]"
        >
          <div 
            className="absolute top-[60%] left-[20%] w-[350px] h-[350px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute top-[80%] right-[25%] w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(229, 222, 255, 0.6) 0%, transparent 70%)' }}
          />
        </motion.div>
      </div>

      <div>
        <WelcomeScreen />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </div>
    </div>
  );
}