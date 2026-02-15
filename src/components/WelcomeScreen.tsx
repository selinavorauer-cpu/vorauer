import { motion } from "motion/react";

export function WelcomeScreen() {
  const words = [
    "Funktionales,",
    "nutzerzentriertes",
    "Design",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Creative sentence with staggered animation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                style={{ fontSize: "clamp(2rem, 8vw, 5rem)", color: "#81006E" }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-600 max-w-xl mx-auto text-[20px]"
          >
            Das Portfolio von Selina Vorauer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
