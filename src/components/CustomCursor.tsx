import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (!target || !(target instanceof HTMLElement)) {
        return;
      }
      
      const isButton = target.tagName === 'BUTTON';
      const isLink = target.tagName === 'A';
      const hasPointerClass = target.classList.contains('cursor-pointer');
      const insideButton = target.closest('button') !== null;
      const insideLink = target.closest('a') !== null;
      
      if (isButton || isLink || hasPointerClass || insideButton || insideLink) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      if (!target || !(target instanceof HTMLElement)) {
        return;
      }
      
      const isButton = target.tagName === 'BUTTON';
      const isLink = target.tagName === 'A';
      const hasPointerClass = target.classList.contains('cursor-pointer');
      const insideButton = target.closest('button') !== null;
      const insideLink = target.closest('a') !== null;
      
      if (isButton || isLink || hasPointerClass || insideButton || insideLink) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Add listeners to hoverable elements using MutationObserver for dynamic elements
    const observer = new MutationObserver(() => {
      const hoverableElements = document.querySelectorAll('button, a, .cursor-pointer');
      hoverableElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial setup
    const hoverableElements = document.querySelectorAll('button, a, .cursor-pointer');
    hoverableElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const hoverableElements = document.querySelectorAll('button, a, .cursor-pointer');
      hoverableElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(129, 0, 110, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: isHovering ? 1.2 : 0.8,
            opacity: isHovering ? 1 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
}
