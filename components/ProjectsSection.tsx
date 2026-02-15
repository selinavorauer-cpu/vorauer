import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import overdosedHeroImg from "figma:asset/09e0709fcc94faef02521a06070c3afb83ba065e.png";

const projects = [
  {
    id: "beat-ball",
    title: "Beat Ball",
    description:
      "Interaktives Musikinstrument, das Musik durch Bewegung und Interaktion erfahrbar macht.",
    image: "beatball-hero",
    size: "large" as const,
    process: {
      research:
        "Conducted user interviews with 15 mobile gamers to understand what makes rhythm games engaging. Analyzed top competitors and identified key pain points in existing games.",
      ideation:
        "Brainstormed multiple game mechanics combining rhythm and ball physics. Created low-fidelity sketches and flow diagrams to visualize different gameplay concepts.",
      design:
        "Developed high-fidelity prototypes in Figma with interactive animations. Designed a minimal UI that keeps focus on gameplay while ensuring accessibility.",
      result:
        "Successfully tested with 25 users, achieving 90% positive feedback. The game increased engagement time by 40% compared to initial prototypes.",
    },
  },
  {
    id: "mydealz-redesign",
    title: "MyDealz Redesign",
    description:
      "Ein App-Redesign der mydealz-App mit Fokus auf eine verbesserte Navigation und ein optimiertes Entdecken von Deals.",
    image: "mydealz-hero",
    size: "large" as const,
    process: {
      research:
        "Performed heuristic evaluation of the current platform and conducted user testing sessions to identify usability issues. Created journey maps for different user personas.",
      ideation:
        "Organized design workshops with stakeholders to align on priorities. Sketched multiple layout variations focusing on information hierarchy and content discovery.",
      design:
        "Created a comprehensive design system with consistent components. Developed interactive prototypes showcasing improved search, filtering, and deal browsing experiences.",
      result:
        "Reduced user task completion time by 35%. A/B testing showed 25% increase in user satisfaction scores and improved conversion rates.",
    },
  },
  {
    id: "postura-rückenfit",
    title: "Postura",
    description:
      "Postura kombiniert Sensorik und App-Feedback, um die Sitzhaltung im Büroalltag nachhaltig zu verbessern.",
    image: "postura-hero",
    size: "large" as const,
    process: {
      research:
        "Researched carbon calculation methodologies and interviewed environmental experts. Studied user behaviors around sustainability and donation platforms.",
      ideation:
        "Mapped out user flows from calculation to donation. Ideated on ways to make complex environmental data accessible and actionable for average users.",
      design:
        "Designed an intuitive step-by-step calculator with clear visualizations. Created engaging data presentations using charts and infographics to show impact.",
      result:
        "Launched with 500+ active users in the first month. Users reported feeling more informed about their environmental impact and easier to take action.",
    },
  },
  {
    id: "plan-me",
    title: "Plan Me",
    description:
      "Plan Me ist eine Erweiterung für WhatsApp, die dabei hilft, Gruppentermine einfacher zu planen, indem sie Kalenderdaten abgleicht und passende Termine vorschlägt.",
    image: "planme-hero",
    size: "small" as const,
    process: {
      research:
        "Studied educational game design principles and consulted with elementary school teachers about age-appropriate learning methods.",
      ideation:
        "Sketched various puzzle mechanics that balance fun and learning. Explored different ways to present paleontology facts without overwhelming young users.",
      design:
        "Created colorful, child-friendly illustrations and simple interactions. Designed reward systems to encourage continued play and learning.",
      result:
        "Positive feedback from parents and teachers. Children showed increased interest in science and improved problem-solving skills.",
    },
  },
  {
    id: "Overdosed",
    title: "Overdosed",
    description:
      "Overdosed thematisiert in einer fotografischen Serie die Selbstüberforderung unserer Konsumgesellschaft – zwischen Fast Food, Fast Fashion, Rauchen und Alkohol.",
    image: overdosedHeroImg,
    size: "small" as const,
    process: {
      research:
        "Interviewed hobby gardeners about their plant care routines and pain points. Analyzed existing gardening apps to find gaps in the market.",
      ideation:
        "Brainstormed features around plant databases, care schedules, and community sharing. Explored notification strategies that help without overwhelming.",
      design:
        "Designed a calming, nature-inspired interface with easy plant management. Created a visual calendar system for tracking watering and fertilizing schedules.",
      result:
        "Beta users reported 60% improvement in plant health. The app helped users establish consistent care routines and discover new plants.",
    },
  },
];

export function ProjectsSection() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const mainProjects = projects.filter(
    (p) => p.size === "large",
  );
  const smallProjects = projects.filter(
    (p) => p.size === "small",
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 font-bold text-[20px] mb-4">
            Ausgewählte Projekte
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecke meine Projekte – von interaktiven
            Musikinstrumenten und App-Redesigns bis hin zu
            smarten Gadgets und kreativen Fotoprojekten. Jedes
            Projekt zeigt, wie ich durch nutzerzentriertes
            Design echte Probleme löse und Erlebnisse gestalte.
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              size={project.size}
              onClick={() => handleProjectClick(project.id)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Smaller Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {smallProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              size={project.size}
              onClick={() => handleProjectClick(project.id)}
              delay={mainProjects.length * 0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}