import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../scroll/ScrollReveal';
import { projects } from '../../data/portfolio';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useMagneticButton } from '../../hooks/useMagneticButton';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const magneticRef = useMagneticButton<HTMLButtonElement>(0.5);

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = filter === 'all' 
    ? projects.slice(0, 5)
    : projects.filter((p) => p.category === filter).slice(0, 5);

  return (
    <section id="projects" className="section py-20 md:py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Proyectos Destacados</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === 'all' ? 'Todos' : cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Código</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mt-16">
            <motion.button
              ref={magneticRef}
              onClick={() => window.location.href = '/projects'}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver todos los proyectos</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;