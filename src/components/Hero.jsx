import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 relative overflow-hidden">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20 max-w-3xl text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          Hi, I'm Samir
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Data & AI Student • Full-Stack Developer • Innovator
        </p>
        <a
          href="#projects"
          className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-2 rounded-full text-white font-semibold"
        >
          See My Work
        </a>
      </motion.div>

      {/* Glow Circle */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-30 top-[-100px] right-[-100px] z-0"></div>
    </section>
  );
}
