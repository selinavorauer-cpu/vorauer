import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import {
  Search,
  Lightbulb,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { RechercheImages } from "../imports/Group161";
import { KonzeptentwicklungImages } from "../imports/Group163-9-1986";
import { DesignImages } from "../imports/Group164";
import { ErgebnisImages } from "../imports/Group165";
import { KonzeptentwicklungPosturaImages } from "../imports/Group166";
import { DesignPosturaImages } from "../imports/Group164-11-2487";
import { PosturaResearchImages } from "../imports/PosturaResearchImages";
import { PosturaKonzeptentwicklungImages } from "../imports/PosturaKonzeptentwicklungImages";
import { PosturaDesignImages } from "../imports/PosturaDesignImages";
import { PosturaHeroImage } from "../imports/Group183-14-2579";
import { MyDealzHeroImage } from "../imports/Group184-28-49";
import { BeatBallHeroImage } from "../imports/BeatBallHero";
import { PlanMeHeroImage } from "../imports/PlanMeHero";
import { BeatBallResearchImages } from "../imports/Group172";
import { BeatBallKonzeptentwicklungImages } from "../imports/Group177";
import { BeatBallDesignImages } from "../imports/Group176";
import { BeatBallErgebnisImages } from "../imports/Group175";
import { MyDealzResearchImage } from "../imports/Group167";
import { KonzeptentwicklungImages as KonzeptentwicklungMyDealzImages } from "../imports/Group168";
import { DesignMyDealzImages } from "../imports/Group169";
import { ErgebnisMyDealzImages } from "../imports/Group171";
const overdosedHeroImg =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243087/IMG_4789_o7nk7y.jpg";
const overdosedImg1 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764242712/IMG_5236_oomynj.jpg";
const overdosedImg2 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764241755/8cc3aa32-85b4-4a86-a1b4-2b893c485b9d_za0hxp.jpg";
const overdosedImg3 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243246/IMG_5271-min_sinifl.jpg";
const overdosedImg4 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764242913/IMG_5473_mczgfv.jpg";
const overdosedImg5 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243263/IMG_4982_persp-min_b8frcc.jpg";
const overdosedImg6 =
  "https://res.cloudinary.com/dn3uyvg0n/image/upload/v1764243269/IMG_4922-min_hp66eb.jpg";

const projectsData = [
  {
    id: "beat-ball",
    title: "Beat Ball",
    description:
      "Interaktives Musikinstrument, das Musik durch Bewegung und Interaktion erfahrbar macht.",
    mainImage: "beatball-hero",
    images: [
      "beatball-research",
      "beatball-konzeptentwicklung",
      "beatball-design",
      "beatball-ergebnis",
    ],
    category: "Interface Design",
    year: "2. Semester",
    process: {
      research:
        "Zu Beginn des Projekts analysierten wir verschiedene Ballarten, um das passende Material, die optimale Größe und das beste haptische Feedback für den BeatBall zu finden. Im Tonstudio testeten wir anschließend, welche Klänge die unterschiedlichen Bälle erzeugen und wie sie sich beim Bouncen verhalten. Schließlich entschieden wir uns für einen Stressball – er bot das ideale Zusammenspiel aus Flexibilität, Sound und Interaktion durch Quetschen und Springen.",
      ideation:
        "In der Konzeptphase überlegten wir, wie sich Sounds am besten erzeugen lassen und mit welchen Tools wir diese umsetzen können. Relativ schnell entschieden wir uns dafür, die Klänge in GarageBand zu produzieren. Den BeatBall-Prototypen entwickelten wir anschließend mit Arduino, um Bewegungen und Interaktionen technisch umzusetzen. Durch einen Usability-Test stellten wir fest, dass Nutzer*innen ein haptisches Feedback benötigen, um zu erkennen, dass der Ball geschüttelt werden kann. Diese Erkenntnis half uns, das Interaktionsverhalten intuitiver und verständlicher zu gestalten.",
      design:
        "Nachdem der BeatBall-Prototyp stand, konzentrierten wir uns auf das Design der begleitenden App. Da sich das physische Design des Balls kaum verändern ließ, lag unser Fokus auf der visuellen und funktionalen Gestaltung der Benutzeroberfläche. Wir entschieden uns für warme Gelbtöne, da sie eine freundliche, aber nicht aufdringliche Wirkung haben. Um die beiden Modi klar voneinander zu unterscheiden, gestalteten wir den Freestyle-Modus im Hochformat – reduziert und intuitiv –, während der Produce-Modus im Querformat angelegt wurde, um mehr Raum für Einstellungen und präzises Beat-Editing zu bieten.",
      result:
        "Am Ende entstand ein funktionsfähiger Prototyp des BeatBall, der Nutzerinnen durch Bewegung und Interaktion spielerisch Musik erleben lässt – und dabei jede Menge Spaß macht. Zusätzlich entwickelten wir in Figma eine begleitende App, die es ermöglichen sollte, aufzuzeichnen, was mit dem BeatBall gespielt wird. Unser Projekt wurde anschließend auf der Studi-Messe in München und Stuttgart ausgestellt, um zukünftigen Bewerberinnen einen Einblick in die kreativen Arbeiten unseres Studiengangs zu geben.",
    },
  },
  {
    id: "mydealz-redesign",
    title: "MyDealz Redesign",
    description:
      "Ein App-Redesign der mydealz-App mit Fokus auf eine verbesserte Navigation und ein optimiertes Entdecken von Deals.",
    mainImage: "mydealz-hero",
    images: [
      "mydealz-research",
      "konzeptentwicklung-mydealz",
      "design-mydealz",
      "ergebnis-mydealz",
    ],
    category: "Application Design",
    year: "3. Semester",
    process: {
      research:
        "Zu Beginn analysierten wir die bestehende mydealz-App und stellten schnell fest, dass sie überladen und unübersichtlich ist, wichtige Filter fehlen und die Suche erschwert ist. Um diese Beobachtungen zu validieren, testeten wir die App mit mehreren Nutzerinnen – alle kamen zu denselben Schlussfolgerungen. Zusätzlich führten wir eine Online-Umfrage durch, um herauszufinden, welche Funktionen und Features den Nutzerinnen in einer Deal-App besonders wichtig sind.",
      ideation:
        "Im Konzept legten wir den Fokus darauf, die App übersichtlich zu gestalten und die Deals für Nutzer*innen leichter auffindbar zu machen. Dafür erstellten wir Low-Fidelity-Wireframes, um erste Layout- und Navigationsideen zu visualisieren. Außerdem analysierten wir ähnliche Apps, um Best Practices zu identifizieren und Inspiration für die Gestaltung zu sammeln.",
      design:
        "Im Design legten wir Wert auf ein ansprechendes, klares Erscheinungsbild. Wir wählten angenehme Blautöne als Akzentfarben und nutzten einheitliche Icons, um ein konsistentes visuelles Bild zu schaffen. Die Home-Bar optimierten wir, sodass Nutzer*innen alle wichtigen Informationen auf einen Blick erfassen können, ohne von zu vielen Elementen überwältigt zu werden.",
      result:
        "Das Ergebnis ist eine neu gestaltete, übersichtliche mydealz-App, die die identifizierten Pain Points adressiert. Alle wichtigen Informationen sind weiterhin verfügbar, jedoch strukturiert und so präsentiert, dass sie nicht aufdringlich wirken. Die Navigation wurde verbessert, sodass Nutzer*innen Deals schneller und intuitiver finden können, und die Filter wurden optimiert, um gezieltes Suchen nach bestimmten Angeboten zu ermöglichen.",
    },
  },
  {
    id: "postura-rückenfit",
    title: "Postura",
    description:
      "Postura kombiniert Sensorik und App-Feedback, um die Sitzhaltung im Büroalltag nachhaltig zu verbessern.",
    mainImage: "postura-hero",
    images: [
      "recherche",
      "konzeptentwicklung-planme",
      "design-planme",
      "ergebnis",
    ],
    category: "Invention Design",
    year: "3. Semester",
    process: {
      research:
        "Zu Beginn analysierten wir bestehende Apps im Bereich Sport und Rücken sowie verschiedene Gadgets für eine gesunde Sitzhaltung. Zusätzlich sprachen wir mit Physiotherapeutinnen, um wichtige Faktoren für ein ergonomisches und wirksames Design zu verstehen. Aus diesen Insights konnten wir erste Konzepte entwickeln und entscheiden, wie unser Prototyp aufgebaut sein sollte, um Nutzerinnen im Büroalltag zu einer besseren Sitzhaltung zu motivieren.",
      ideation:
        "Beim Konzept stellten wir fest, dass das Gadget unter der Kleidung unsichtbar und angenehm zu tragen sein sollte. Daher entschieden wir uns für einen Gurt unter der Brust und zwei Träger über den Schultern, die Nutzerinnen direkt spüren lassen, wenn die Schultern hängen – ein häufiges Problem bei Büroangestellten. Die begleitende App bietet eine Live-Übersicht zum getragenen Gadget, sodass Nutzerinnen sofort sehen, ob sie die richtige Haltung einnehmen. Zusätzlich ermöglicht die App Übungen und die optionale Zusammenarbeit mit Physiotherapeutinnen, um die Haltung gezielt zu verbessern.",
      design:
        "Für die App wählten wir Blau als Hauptfarbe, da es Entspannung und Ruhe vermittelt. Wir legten großen Wert auf Übersichtlichkeit, sodass Nutzerinnen nicht mit zu vielen Informationen auf einmal überfordert werden. Eine Gamification-Funktion motiviert zur regelmäßigen Nutzung des Gadgets, indem sie das Training spielerisch gestaltet. Für die Live-Übersicht gestalteten wir Männchen, die auf einen Blick anzeigen, ob der Rücken rund, gerade oder hohl ist und ob die Schultern hängen – so erhalten Nutzerinnen sofort visuelles Feedback zu ihrer Haltung.",
      result:
        "Am Ende entstand ein Gadget, das Nutzerinnen hilft, ihre Haltung zu korrigieren, sowie eine begleitende App. Die App ermöglicht es, auch ohne das Tragen des Gadgets gezielte Übungen durchzuführen und die eigenen Fortschritte zu verfolgen. Durch die Live-Ansicht können Nutzerinnen zudem direkt erkennen, ob sie die richtige Haltung einnehmen, und erhalten so unmittelbares visuelles Feedback.",
    },
  },
  {
    id: "plan-me",
    title: "Plan Me",
    description:
      "Plan Me ist eine Erweiterung für WhatsApp, die dabei hilft, Gruppentermine einfacher zu planen, indem sie Kalenderdaten abgleicht und passende Termine vorschlägt.",
    mainImage: "planme-hero",
    images: [
      "https://images.unsplash.com/photo-1760604359281-b738de589439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MTQ3MTY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxNDcxNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxNDQ2NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    category: " Design Sprint Week",
    year: "1. Semester",
    process: {
      PlanMe:
        "Im ersten Semester mussten wir im Rahmen eines Design Sprints ein Projekt entwickeln – daraus entstand Plan Me. Es ist ein Plugin für WhatsApp, das die Terminplanung in Gruppen erleichtert. Viele kennen das Problem: Für einen Gruppen-Termin müssen alle Kalender durchforstet werden, was oft zeitaufwendig ist. Plan Me vereinfacht diesen Prozess, indem es die Kalender aller Teilnehmer*innen einsehen und automatisch einen passenden Termin vorschlagen kann. Vorab kann entschieden werden, ob man selbst einen Termin vorgibt oder Plan Me einen optimalen Termin berechnet.",
    },
  },
  {
    id: "Overdosed",
    title: "Overdosed",
    description:
      "Overdosed thematisiert in einer fotografischen Serie die Selbstüberforderung unserer Konsumgesellschaft – zwischen Fast Food, Fast Fashion, Rauchen und Alkohol.",
    mainImage: overdosedHeroImg,
    images: [
      overdosedImg1,
      overdosedImg2,
      overdosedImg3,
      overdosedImg4,
      overdosedImg5,
      overdosedImg6,
    ],
    category: "Fotografie",
    year: "3. Semester",
    process: {
      research:
        "Für das Fotoprojekt Overdosed recherchierten wir intensiv zu den Themen Konsumverhalten, Überfluss und gesellschaftliche Überforderung. Wir analysierten fotografische Arbeiten, die soziale Missstände thematisieren, und studierten verschiedene Stilmittel der konzeptionellen Fotografie. Interviews mit jungen Erwachsenen gaben Einblicke in ihren Umgang mit Fast Food, Fast Fashion, Genussmitteln und Konsumdruck.",
      ideation:
        "In der Konzeptphase entwickelten wir verschiedene visuelle Ansätze, um Selbstüberforderung darzustellen. Wir experimentierten mit Überzeichnungen, Inszenierungen und symbolischen Arrangements. Schließlich entschieden wir uns für eine Serie, die Konsum-Exzesse durch bewusst überladene und provokante Bildkompositionen sichtbar macht.",
      design:
        "Die fotografische Umsetzung arbeitete mit starken Kontrasten, intensiven Farben und bewusst inszenierten Chaos-Szenen. Jedes Bild fokussiert ein Konsumthema – von Fast Food-Überfluss über Kleidungs-Berge bis zu Genussmittel-Anhäufungen. Die Bildsprache ist bewusst überspitzt, um die Dringlichkeit des Themas zu unterstreichen.",
      result:
        "Die Fotoserie Overdosed wurde in einer Ausstellung präsentiert und löste intensive Diskussionen über Konsumverhalten und gesellschaftlichen Druck aus. Die Arbeiten wurden in sozialen Medien geteilt und erreichten ein breites Publikum. Das Projekt zeigt, wie Fotografie gesellschaftskritische Themen emotional greifbar machen kann.",
    },
  },
];

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">
            Projekt nicht gefunden
          </h2>
          <Button onClick={() => navigate("/")}>
            Zurück zur Startseite
          </Button>
        </div>
      </div>
    );
  }

  const processSteps = [
    {
      icon: Search,
      title: "Research",
      content: project.process.research,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lightbulb,
      title: "Konzeptentwicklung",
      content: project.process.ideation,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Palette,
      title: "Design",
      content: project.process.design,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: CheckCircle2,
      title: "Ergebnis",
      content: project.process.result,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  // Special layout for Plan Me project - text only
  if (project.id === "plan-me") {
    return (
      <div className="min-h-screen bg-white pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                {project.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-gray-900 mb-4 text-[36px] font-bold">
              {project.title}
            </h1>
            <p className="text-gray-600">
              {project.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <div className="w-full h-full flex items-center justify-center bg-[#e90139]">
                <PlanMeHeroImage />
              </div>
            </div>
          </motion.div>

          {/* Text Content Only */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6 font-bold text-[20px]">
                Plan Me
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Im ersten Semester mussten wir im Rahmen eines
                Design Sprints ein Projekt entwickeln – daraus
                entstand Plan Me. Es ist ein Plugin für
                WhatsApp, das die Terminplanung in Gruppen
                erleichtert. Viele kennen das Problem: Für einen
                Gruppen-Termin müssen alle Kalender durchforstet
                werden, was oft zeitaufwendig ist. Plan Me
                vereinfacht diesen Prozess, indem es die
                Kalender aller Teilnehmer*innen einsehen und
                automatisch einen passenden Termin vorschlagen
                kann. Vorab kann entschieden werden, ob man
                selbst einen Termin vorgibt oder Plan Me einen
                optimalen Termin berechnet.
              </p>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() =>
                navigate("/", {
                  state: { scrollToProjects: true },
                })
              }
              className="px-8 py-3 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg transition-colors duration-300"
            >
              Weitere Projekte ansehen
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Special layout for Overdosed photography project
  if (project.id === "Overdosed") {
    return (
      <div className="min-h-screen bg-white pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                {project.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-gray-900 mb-4 text-[36px] font-bold">
              {project.title}
            </h1>
            <p className="text-gray-600 max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <ImageWithFallback
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group bg-gray-50"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Foto ${index + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() =>
                navigate("/", {
                  state: { scrollToProjects: true },
                })
              }
              className="px-8 py-3 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg transition-colors duration-300"
            >
              Weitere Projekte ansehen
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
              {project.year}
            </span>
          </div>
          <h1 className="text-gray-900 mb-4 text-[36px] font-bold">
            {project.title}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Alternating Image and Description Layout */}
        <div className="mb-16 space-y-20">
          {/* Main Image with Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              {project.mainImage === "postura-hero" ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <PosturaHeroImage />
                </div>
              ) : project.mainImage === "mydealz-hero" ? (
                <div className="w-full h-full flex items-center justify-center bg-[#587eb2]">
                  <MyDealzHeroImage />
                </div>
              ) : project.mainImage === "beatball-hero" ? (
                <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5]">
                  <BeatBallHeroImage />
                </div>
              ) : project.mainImage === "planme-hero" ? (
                <div className="w-full h-full flex items-center justify-center bg-[#e90139]">
                  <PlanMeHeroImage />
                </div>
              ) : (
                <ImageWithFallback
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="max-w-3xl mx-auto text-center px-4">
              <p className="text-gray-600">
                {project.process.Recherche}
              </p>
            </div>
          </motion.div>

          {/* Process Images alternating with descriptions */}
          {processSteps.map((step, index) => {
            const imageIndex = index % project.images.length;
            const isEven = index % 2 === 0;
            const currentImage = project.images[imageIndex];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  {currentImage === "recherche" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <PosturaResearchImages />
                    </div>
                  ) : currentImage === "beatball-research" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <BeatBallResearchImages />
                    </div>
                  ) : currentImage ===
                    "beatball-konzeptentwicklung" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <BeatBallKonzeptentwicklungImages />
                    </div>
                  ) : currentImage === "beatball-design" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <BeatBallDesignImages />
                    </div>
                  ) : currentImage === "beatball-ergebnis" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <BeatBallErgebnisImages />
                    </div>
                  ) : currentImage === "mydealz-research" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <MyDealzResearchImage />
                    </div>
                  ) : currentImage ===
                    "konzeptentwicklung-mydealz" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <KonzeptentwicklungMyDealzImages />
                    </div>
                  ) : currentImage === "konzeptentwicklung" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <KonzeptentwicklungImages />
                    </div>
                  ) : currentImage ===
                    "konzeptentwicklung-planme" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <PosturaKonzeptentwicklungImages />
                    </div>
                  ) : currentImage === "design" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <DesignImages />
                    </div>
                  ) : currentImage === "design-planme" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <PosturaDesignImages />
                    </div>
                  ) : currentImage === "design-mydealz" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <DesignMyDealzImages />
                    </div>
                  ) : currentImage === "ergebnis-mydealz" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <ErgebnisMyDealzImages />
                    </div>
                  ) : currentImage === "ergebnis" ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                      <ErgebnisImages />
                    </div>
                  ) : (
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={currentImage}
                        alt={`${project.title} - ${step.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <div
                  className={
                    isEven
                      ? ""
                      : "lg:col-start-1 lg:row-start-1"
                  }
                >
                  <div className="space-y-4">
                    <div
                      className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <step.icon
                        className={`w-7 h-7 ${step.color}`}
                      />
                    </div>
                    <h3 className="text-gray-900 font-bold">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Project Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() =>
              navigate("/", {
                state: { scrollToProjects: true },
              })
            }
            className="px-8 py-3 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg transition-colors duration-300"
          >
            Weitere Projekte ansehen
          </button>
        </motion.div>
      </div>
    </div>
  );
}