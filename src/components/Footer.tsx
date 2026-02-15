import { motion } from "motion/react";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:selina.vorauer@hotmail.com",
    },
    {
      icon: Phone,
      label: "Telefon",
      href: "tel:+4901623237546",
    },
    {
      icon: MapPin,
      label: "Adresse",
      href: "https://maps.google.com/?q=Rektor-Klaus-Straße+100,+73525+Schwäbisch+Gmünd",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/selina.vorauer/",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-white mb-4">Kontakt</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Auf der Suche nach einem Praktikum im Praxissemester ab März 2026
            – ich freue mich auf spannende Projekte und neue
            Erfahrungen!
          </p>

          <div className="flex gap-4 justify-center mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  ["--hover-bg" as any]: "#81006E",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#81006E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)")
                }
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} Selina Vorauer.
              Interaktionsgestalterin.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
