import { motion } from 'framer-motion';
import ScrollReveal from '../scroll/ScrollReveal';
import { timeline } from '../../data/portfolio';
import { Calendar } from 'lucide-react';
import profileImage from '../../assets/img/Image_op8c3vop8c3vop8c.webp';

const About = () => {
  return (
    <section className="section py-20 md:py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Mi Historia</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un viaje de aprendizaje continuo y pasión por crear experiencias digitales
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-700" />

          {timeline.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div className="ml-16 md:ml-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-full mb-4">
                      <Calendar size={16} className="text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Circle Marker */}
                <div className="absolute left-8 md:left-1 transform md:-translate-x-1/2 w-6 h-6">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-4 border-[#0a0a0f]"
                    whileHover={{ scale: 1.5 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* About Description - Two Column Layout */}
        <ScrollReveal delay={0.6}>
          <div className="max-w-6xl mx-auto mt-20 p-8 md:p-12 rounded-2xl glass border border-white/10" id="about">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
              Más sobre mí
            </h3>
            
            {/* Grid Layout: Text (60-65%) | Image (35-40%) */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-8 md:gap-12 items-center">
              {/* Text Column */}
              <div className="space-y-4">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Soy un desarrollador frontend apasionado por crear interfaces de usuario que no solo se vean bien, 
                  sino que proporcionen experiencias excepcionales. Me especializo en convertir diseños en código 
                  limpio y mantenible, siempre pensando en la accesibilidad y el rendimiento.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Mi enfoque se centra en el aprendizaje continuo y la adaptación a las nuevas tecnologías. 
                  Disfruto trabajando en proyectos desafiantes que me permiten crecer profesionalmente y 
                  contribuir con soluciones innovadoras.
                </p>
              </div>

              {/* Image Column */}
              <motion.div
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl blur-xl" />
                  <img
                    src={profileImage.src}
                    alt="Perfil"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full h-auto rounded-xl object-cover border border-cyan-500/30"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;