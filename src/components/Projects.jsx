import { motion } from "framer-motion";

const projects = [
  {
    title: "⚽ Football Recommender",
    desc: "Machine learning system recommending players based on team needs.",
    link: "https://github.com/yourrepo1",
  },
  {
    title: "📊 Excel VBA Automation",
    desc: "Automated dashboards using Excel macros for real-time updates.",
    link: "https://github.com/yourrepo2",
  },
  {
    title: "📱 Android Medical App",
    desc: "Appointment app using Java + Firebase with alerts and calendar sync.",
    link: "https://github.com/yourrepo3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="block bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600">{proj.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
