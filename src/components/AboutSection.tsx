import { motion } from "motion/react";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
const photoshopIcon =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243375/photoshop_vynecb.png";
const illustratorIcon =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243395/illustrator_qbmhfi.png";
const vscodeIcon =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243416/icons8-visual-studio-code-2019-48_galjas.png";
const indesignIcon =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243439/indesign_tlfpjl.png";
const premiereIcon =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243471/premiere-pro_ii7wh5.png";

// Custom SVG Icons for Adobe Tools and VS Code
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
      fill="#0ACF83"
    />
    <path
      d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
      fill="#A259FF"
    />
    <path
      d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
      fill="#F24E1E"
    />
    <path
      d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
      fill="#FF7262"
    />
    <path
      d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
      fill="#1ABCFE"
    />
  </svg>
);

const PhotoshopIcon = () => (
  <img
    src={photoshopIcon}
    alt="Photoshop"
    className="w-5 h-5"
  />
);

const IllustratorIcon = () => (
  <img
    src={illustratorIcon}
    alt="Illustrator"
    className="w-5 h-5"
  />
);

const InDesignIcon = () => (
  <img src={indesignIcon} alt="InDesign" className="w-5 h-5" />
);

const VSCodeIcon = () => (
  <img
    src={vscodeIcon}
    alt="Visual Studio Code"
    className="w-5 h-5"
  />
);

const PremiereIcon = () => (
  <img
    src={premiereIcon}
    alt="Premiere Pro"
    className="w-5 h-5"
  />
);

export function AboutSection() {
  const education = [
    {
      period: "03/2024  –  aktuell",
      title: "B.A. Interaktionsgestaltung",
      institution: "Hochschule für Gestaltung Schwäbisch Gmünd",
    },
    {
      period: "09/2019  –  07/2022",
      title: "Fachhholschulreife",
      institution:
        "Jakob-Friedrich-Schöllkopf Schule Wirtschaftsgymnasium",
    },
  ];

  const experience = [
    {
      period: "04/2024 – aktuell",
      title: "Nebenbeschäftigung im Fahrdienst",
      company: "Johanniter-Unfall-Hilfe e.V.",
      description:
        "Durchführung und Koordination des Fahrdienstes für Menschen mit Behinderung und Senioren sowie termingerechte Lieferung von Wäsche und Verpflegung an soziale und medizinische Einrichtungen.",
    },
    {
      period: "09/2022 – 09/2023",
      title: "Freiwilliges Soziales Jahr (FSJ) im Fahrdienst",
      company: "Johanniter-Unfall-Hilfe e.V.",
      description:
        "Planung und Durchführung täglicher Fahrten sowie Unterstützung bei administrativen Aufgaben wie Dokumentation, Routenoptimierung und Terminorganisation.",
    },
  ];

  const skills = [
    { name: "Figma", icon: FigmaIcon },
    { name: "Photoshop", icon: PhotoshopIcon },
    { name: "Illustrator", icon: IllustratorIcon },
    { name: "InDesign", icon: InDesignIcon },
    { name: "Visual Studio Code", icon: VSCodeIcon },
    { name: "Premiere Pro", icon: PremiereIcon },
  ];

  const interests = [
    "Reisen",
    "Interaktive Konzepte",
    "Freunde treffen",
    "Schwimmen",
    "UX/UI-Trends",
    "Lesen",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 font-bold text-[20px] mb-4">
            Design bedeutet für mich
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Design für mich bedeutet nicht nur schöne
            Oberflächen zu gestalten, sondern Probleme zu
            verstehen und Lösungen zu entwickeln, die Menschen
            wirklich helfen. Gleichzeitig lege ich großen Wert
            darauf, dass mein Alltag ausgewogen ist: Ich treffe
            mich gerne mit Freunden, gehe regelmäßig ins Gym und
            probiere neue Dinge aus. In meiner Freizeit lese ich
            gerne und schaue mir die Interfaces von Geräten an,
            die ich täglich benutze – manchmal nur aus Neugier,
            manchmal für neue Ideen. Ich liebe es, kreativ zu
            sein, neue Orte zu entdecken oder einfach einen
            entspannten Abend mit Musik und guter Gesellschaft
            zu verbringen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-6 h-6 text-pink-600" />
              </motion.div>
              <h3 className="text-gray-900 font-bold text-[20px]">
                Ausbildung
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                  }}
                  whileHover={{ x: 10 }}
                  className="border-l-2 border-pink-200 pl-6 pb-6 last:pb-0"
                >
                  <span className="text-sm text-pink-600">
                    {item.period}
                  </span>
                  <h4 className="text-gray-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Briefcase className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h3 className="text-gray-900 font-bold text-[20px]">
                Erfahrungen
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                  }}
                  whileHover={{ x: -10 }}
                  className="border-l-2 border-purple-300 pl-6 pb-6 last:pb-0"
                >
                  <span className="text-sm text-purple-600">
                    {item.period}
                  </span>
                  <h4 className="text-gray-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-gray-900 mb-8 text-center font-bold text-[20px]">
            Skills
          </h3>
          <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(129, 0, 110, 0.1), rgba(129, 0, 110, 0.05))",
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon />
                </motion.div>
                <span className="text-gray-900">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-gray-900 font-bold text-[20px]">
              Interessen
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -10,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="px-5 py-2.5 text-gray-700 rounded-full border cursor-pointer transition-colors"
                style={{
                  background:
                    "linear-gradient(to right, rgba(129, 0, 110, 0.08), rgba(129, 0, 110, 0.05))",
                  borderColor: "rgba(129, 0, 110, 0.2)",
                }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
