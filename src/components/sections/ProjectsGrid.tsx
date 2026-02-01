import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Search, Home, ArrowLeft } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import ScrollReveal from '../scroll/ScrollReveal';

type Category = string | 'Todos';

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const { projects, loading, error } = useProjects();

  const categories: Category[] = [
    'Todos',
    ...Array.from(new Set(projects.map((p) => p.category)))
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen py-20 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span>Volver al inicio</span>
          </motion.button>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Todos los Proyectos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explora mi portafolio completo de proyectos y descubre las soluciones que he desarrollado
            </p>
          </div>
        </ScrollReveal>

        {/* Search Bar */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar proyectos por nombre, descripción o tecnología..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-500 transition-all duration-300"
              />
            </div>
          </div>
        </ScrollReveal>


        
        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        {loading && (
          <div className="text-center py-20">
            <p className="text-gray-400">Cargando proyectos...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400">Error al cargar proyectos: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading='lazy'
                        decoding='async'
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-white/10">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span>Código</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-400">
                  No hay proyectos que coincidan con tu búsqueda
                </p>
              </div>
            )}
          </>
        )}

        {/* Back to Home Button */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-20">
            <motion.a
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              <span>Volver al Inicio</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsGrid;
