import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PosturaHeroImage } from '../imports/Group183-14-2579';
import { MyDealzHeroImage } from '../imports/Group184-28-49';
import { BeatBallHeroImage } from '../imports/BeatBallHero';
import { PlanMeHeroImage } from '../imports/PlanMeHero';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  size: 'large' | 'small';
  onClick: () => void;
  delay?: number;
}

export function ProjectCard({ title, description, image, size, onClick, delay = 0 }: ProjectCardProps) {
  const isPosturaHero = image === 'postura-hero';
  const isMyDealzHero = image === 'mydealz-hero';
  const isBeatBallHero = image === 'beatball-hero';
  const isPlanMeHero = image === 'planme-hero';
  
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`group cursor-pointer ${ 
        size === 'large' ? 'col-span-1' : 'col-span-1'
      }`}
      onClick={onClick}
    >
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : "0deg",
          rotateY: isHovered ? rotateY : "0deg",
          transformStyle: "preserve-3d",
        }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
      >
        <div className={`relative overflow-hidden ${
          size === 'large' ? 'h-80' : 'h-64'
        }`}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            {isPosturaHero ? (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <PosturaHeroImage />
              </div>
            ) : isMyDealzHero ? (
              <div className="w-full h-full flex items-center justify-center bg-[#587eb2]" style={{ transform: 'scale(1.1)' }}>
                <MyDealzHeroImage />
              </div>
            ) : isBeatBallHero ? (
              <div className="w-full h-full flex items-center justify-center bg-white">
                <BeatBallHeroImage />
              </div>
            ) : isPlanMeHero ? (
              <div className="w-full h-full flex items-center justify-center bg-[#e90139]">
                <PlanMeHeroImage />
              </div>
            ) : (
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className={`p-6 ${size === 'large' ? 'min-h-[165px]' : ''}`}>
          <h3 className="text-gray-900 mb-2 transition-colors duration-300 group-hover:[color:#81006E]">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
