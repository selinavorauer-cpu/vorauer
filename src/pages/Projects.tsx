import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'Modern E-Commerce UI',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBwcm9qZWN0JTIwdGh1bWJuYWlsJTIwcm9zZSUyMHB1cnBsZXxlbnwxfHx8fDE3NzExNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Ein minimalistisches Interface-Konzept für einen Online-Shop mit Fokus auf intuitive Navigation und visuelles Storytelling.'
    },
    {
      id: '2',
      title: 'Finance App Dashboard',
      category: 'App Design',
      image: 'https://images.unsplash.com/photo-1735754963704-dcf047e6849a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4JTIwd2lyZWZyYW1lJTIwcHJvamVjdCUyMHJvc2UlMjBwdXJwbGV8ZW58MXx8fHwxNzcxMTUwNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Eine mobile Banking-App, die komplexe Finanzdaten einfach und übersichtlich darstellt. Features umfassen Budget-Tracking und Investitionsanalysen.'
    },
    {
      id: '3',
      title: 'Digital Branding System',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1743275062656-b7e3471d8570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHJvc2UlMjBwdXJwbGVlMjBncmFkaWVudCUyMGJhY2tncm91bmQlMjBtaW5pbWFsaXN0aWN8ZW58MXx8fHwxNzcxMTUwNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Entwicklung einer visuellen Identität für ein Tech-Startup mit Fokus auf Rose- und Violett-Töne, die Innovation und Freundlichkeit ausstrahlen.'
    },
    {
      id: '4',
      title: 'Smart Home Interface',
      category: 'IoT Design',
      image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMTUwNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Ein zentrales Steuerungspanel für Smart-Home-Geräte, das sich an die Gewohnheiten der Bewohner anpasst.'
    },
    {
      id: '5',
      title: 'Travel Agency Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MTE1MDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Redesign einer Reisebüro-Website mit Fokus auf emotionale Bildsprache und vereinfachte Buchungsprozesse.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-rose-50/30 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Meine Projekte</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Eine Auswahl meiner Arbeiten aus den Bereichen UI/UX Design, Webentwicklung und Branding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
