import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Monitor, Smartphone, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
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
      description: 'Eine mobile Banking-App, die komplexe Finanzdaten einfach und übersichtlich darstellt.'
    },
    {
      id: '3',
      title: 'Digital Branding System',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1743275062656-b7e3471d8570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHJvc2UlMjBwdXJwbGVlMjBncmFkaWVudCUyMGJhY2tncm91bmQlMjBtaW5pbWFsaXN0aWN8ZW58MXx8fHwxNzcxMTUwNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Entwicklung einer visuellen Identität für ein Tech-Startup mit Fokus auf Rose- und Violett-Töne.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-3xl" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-medium text-sm mb-6 border border-rose-200">
              Interaction Design Studentin
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Designen mit <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
                Leidenschaft
              </span> & <br />
              Präzision.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Hallo, ich bin Anna. Ich gestalte digitale Erlebnisse, die nicht nur gut aussehen, sondern sich auch richtig anfühlen. Minimalistisch, funktional und menschenzentriert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-rose-200/50 flex items-center"
              >
                Projekte ansehen <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors"
              >
                Mehr über mich
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBpbnRlcmFjdGlvbiUyMGRlc2lnbiUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1pbmltYWxpc3RpY3xlbnwxfHx8fDE3NzExNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -left-6 bg-white p-4 rounded-xl shadow-lg border border-rose-50 flex items-center gap-3"
            >
              <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                <Monitor size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">UI Design</p>
                <p className="text-sm font-bold text-slate-900">Pixel Perfect</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-6 bg-white p-4 rounded-xl shadow-lg border border-purple-50 flex items-center gap-3"
            >
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Smartphone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Mobile First</p>
                <p className="text-sm font-bold text-slate-900">Responsive</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Meine Kompetenzen</h2>
            <p className="text-slate-500">Ich kombiniere kreatives Design mit technischem Verständnis, um digitale Produkte zu schaffen, die funktionieren.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Monitor className="w-8 h-8 text-rose-500" />, title: "Interface Design", desc: "Gestaltung von intuitiven und ästhetischen Benutzeroberflächen für Web und Mobile." },
              { icon: <Layers className="w-8 h-8 text-purple-500" />, title: "User Experience", desc: "Analyse von Nutzerbedürfnissen und Entwicklung von User Journeys und Wireframes." },
              { icon: <Smartphone className="w-8 h-8 text-rose-500" />, title: "Prototyping", desc: "Erstellung von interaktiven High-Fidelity Prototypen in Figma und React." }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-100 hover:shadow-lg transition-all"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                <p className="text-slate-500 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-rose-50/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-rose-600 font-medium tracking-wider uppercase text-sm">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Ausgewählte Arbeiten</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-slate-600 hover:text-rose-600 font-medium transition-colors">
              Alle Projekte <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center text-slate-600 hover:text-rose-600 font-medium transition-colors">
              Alle Projekte ansehen <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-purple-600/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Lass uns etwas Großartiges schaffen.</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Ich bin immer auf der Suche nach neuen Herausforderungen und spannenden Projekten im Bereich Interaction Design.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex px-10 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-rose-200/50"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
