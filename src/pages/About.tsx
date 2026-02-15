import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-rose-600 font-medium tracking-wider uppercase text-sm">Über mich</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-4 mb-8">
            Hallo, ich bin Anna. <br />
            <span className="text-slate-400">Interaction Design Studentin aus Berlin.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="prose prose-lg prose-rose">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Mein Design-Ansatz ist geprägt von der Überzeugung, dass Technologie für den Menschen da sein sollte, nicht umgekehrt. Ich liebe es, komplexe Probleme in einfache, intuitive Lösungen zu verwandeln.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Aktuell studiere ich Interaction Design im 5. Semester. Neben dem Studium arbeite ich an verschiedenen Freelance-Projekten und experimentiere mit neuen Web-Technologien.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Was mich antreibt</h3>
              <p className="text-slate-600">
                Die Schnittstelle zwischen Design und Entwicklung fasziniert mich besonders. Ich glaube, dass die besten Produkte entstehen, wenn Gestaltung und technische Umsetzung Hand in Hand gehen.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBpbnRlcmFjdGlvbiUyMGRlc2lnbiUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1pbmltYWxpc3RpY3xlbnwxfHx8fDE3NzExNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Anna Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-rose-50 max-w-xs">
                <p className="font-serif text-lg text-slate-900 italic">
                  "Good design is obvious. Great design is transparent."
                </p>
                <p className="text-sm text-slate-500 mt-2">— Joe Sparano</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Ausbildung & Erfahrung</h2>
            <div className="space-y-8 border-l-2 border-rose-100 pl-8 relative">
              {[
                { year: '2021 - Heute', title: 'BA Interaction Design', org: 'Universität der Künste', desc: 'Schwerpunkt auf User Experience, Prototyping und Creative Coding.' },
                { year: '2023', title: 'UI Design Intern', org: 'Creative Studio Berlin', desc: 'Mitarbeit an Web-Projekten für internationale Kunden.' },
                { year: '2020', title: 'Gestaltungstechnische Assistentin', org: 'Berufskolleg für Gestaltung', desc: 'Grundlagen in Grafikdesign, Typografie und Webentwicklung.' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-rose-500 border-4 border-white shadow-sm" />
                  <span className="text-sm font-bold text-rose-500 tracking-wide">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                  <p className="text-slate-700 font-medium mb-2">{item.org}</p>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
