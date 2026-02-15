import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-rose-600 font-medium tracking-wider uppercase text-sm">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
              Lass uns zusammenarbeiten.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Hast du ein Projekt im Kopf oder möchtest du einfach nur Hallo sagen? Ich bin immer offen für neue Möglichkeiten und kreative Herausforderungen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-full mr-4 text-rose-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <a href="mailto:hallo@example.com" className="text-slate-600 hover:text-rose-600 transition-colors">hallo@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Telefon</h3>
                  <p className="text-slate-600">+49 123 4567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-full mr-4 text-rose-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Standort</h3>
                  <p className="text-slate-600">Berlin, Deutschland</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-rose-50"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    placeholder="deine@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Betreff</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="Worum geht es?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Nachricht</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                  placeholder="Deine Nachricht..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-200/50 transition-all transform hover:-translate-y-1"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
