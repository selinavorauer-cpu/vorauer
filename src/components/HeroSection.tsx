import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PostItProps {
  text: string;
  color: string;
  rotation: number;
  initialX: number;
  initialY: number;
  delay: number;
  onClick?: () => void;
  isClickable?: boolean;
}

function PostIt({
  text,
  color,
  rotation,
  initialX,
  initialY,
  delay,
  onClick,
  isClickable = false,
}: PostItProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      drag={!isClickable}
      dragMomentum={false}
      dragElastic={0.1}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotation,
        x: 0,
        y: 0,
      }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        rotate: rotation + 2,
        transition: { duration: 0.2 },
      }}
      whileDrag={
        !isClickable
          ? {
              scale: 1.1,
              cursor: "grabbing",
              rotate: rotation + 5,
            }
          : undefined
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`absolute ${isClickable ? "cursor-pointer" : "cursor-grab"}`}
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
    >
      <motion.div
        className="w-48 h-48 p-6 flex items-center justify-center"
        style={{
          backgroundColor: color,
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        }}
        transition={{ duration: 0.2 }}
      >
        <p
          className="text-gray-800 text-center leading-relaxed"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [clickedFacts, setClickedFacts] = useState<number[]>(
    [],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "D" || e.key === "d")
      ) {
        e.preventDefault();
        setShowFunFacts(true);
        setClickedFacts([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const postIts = [
    {
      text: "4. Semester Interaktionsgestaltung 📚",
      color: "#FFE5EC",
      rotation: -3,
      x: 10,
      y: 15,
    },
    {
      text: "Try Ctrl+Shift+D",
      color: "#FFF4D6",
      rotation: 2,
      x: 65,
      y: 10,
    },
    {
      text: "UX/UI-Design✨",
      color: "#E5DEFF",
      rotation: -2,
      x: 15,
      y: 65,
    },
    {
      text: "Prototyping & Testing🎨",
      color: "#FFE5F4",
      rotation: 4,
      x: 70,
      y: 60,
    },
    {
      text: "Usability & Nutzererlebnis",
      color: "#D6F5FF",
      rotation: -4,
      x: 40,
      y: 35,
    },
  ];

  const funFacts = [
    {
      text: "Ich liebe Burger 🍔",
      color: "#FFE5D9",
      rotation: 3,
      x: 20,
      y: 20,
    },
    {
      text: "Ich habe 6 Geschwister 👩🏼",
      color: "#E5DEFF",
      rotation: -5,
      x: 50,
      y: 15,
    },
    {
      text: "Ich liebe True Crime Podcast 👩🏼‍✈️",
      color: "#FFE5F4",
      rotation: 4,
      x: 15,
      y: 50,
    },
    {
      text: "Ich grüße jede Katze, die mir begegnet. Immer. 🐈‍⬛",
      color: "#FFF4D6",
      rotation: -3,
      x: 60,
      y: 50,
    },
    {
      text: "How I Met Your Mother ist meine lieblings Serie 📺",
      color: "#D6F5FF",
      rotation: 2,
      x: 70,
      y: 25,
    },
    {
      text: "Ich liebe es zu kochen 🥘",
      color: "#FFE5EC",
      rotation: -4,
      x: 35,
      y: 65,
    },
  ];

  const handleFactClick = (index: number) => {
    setClickedFacts([...clickedFacts, index]);

    // Hide all fun facts when all have been clicked
    if (clickedFacts.length + 1 === funFacts.length) {
      setTimeout(() => {
        setShowFunFacts(false);
        setClickedFacts([]);
      }, 500);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* Left Side: Portrait Photo and Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center gap-8"
          >
            {/* Portrait Photo */}
            <div className="relative">
              {/* Glowing rings behind portrait */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(129, 0, 110, 0.3) 0%, rgba(129, 0, 110, 0.15) 100%)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Portrait with glassmorphism effect */}
              <div className="relative w-80 h-70 md:w-75 md:h-100 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
                <img
                  src="https://i.postimg.cc/sXzLzG0J/Portfoliofoto-selina.jpg"
                  alt="Selina Vorauer Portrait"
                  className="w-100 h-100 object-cover"
                />
                {/* Lila Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(129, 0, 110, 0.1), transparent, rgba(129, 0, 110, 0.1))",
                  }}
                />
              </div>

              {/* Floating accent circles - Lila Töne */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10 shadow-lg opacity-70"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(129, 0, 110, 0.5), rgba(129, 0, 110, 0.3))",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-30 h-30 rounded-full -z-10 shadow-lg opacity-70"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(129, 0, 110, 0.3), rgba(129, 0, 110, 0.2))",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-gray-900 text-[20px] font-bold font-normal">
                Hi, ich bin
              </h1>
              <h1
                className="text-[64px] font-semibold"
                style={{
                  fontFamily: "American Typewriter, sans-serif",
                  color: "#81006E",
                }}
              >
                Selina Vorauer
              </h1>
            </motion.div>
          </motion.div>

          {/* Right Side: Draggable Post-its */}
          <div className="flex-1 relative w-full h-[600px]">
            {postIts.map((postIt, index) => (
              <PostIt
                key={index}
                text={postIt.text}
                color={postIt.color}
                rotation={postIt.rotation}
                initialX={postIt.x}
                initialY={postIt.y}
                delay={0.6 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fun Facts Overlay - Full Screen */}
      {showFunFacts && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-7xl mx-auto px-6">
            {funFacts.map(
              (fact, index) =>
                !clickedFacts.includes(index) && (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: fact.rotation,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: fact.rotation,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    onClick={() => handleFactClick(index)}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${fact.x}%`,
                      top: `${fact.y}%`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: fact.rotation + 3,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="w-56 h-56 p-6 flex items-center justify-center relative"
                      style={{
                        backgroundColor: fact.color,
                      }}
                      animate={{
                        boxShadow: [
                          "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(129, 0, 110, 0.4)",
                          "0 10px 25px rgba(0, 0, 0, 0.15), 0 0 0 8px rgba(129, 0, 110, 0.1)",
                          "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(129, 0, 110, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <p
                        className="text-gray-800 text-center leading-relaxed"
                        style={{
                          fontFamily: "Comic Sans MS, cursive",
                        }}
                      >
                        {fact.text}
                      </p>
                      {/* Click indicator */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-white w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "#81006E",
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        ✕
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ),
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
