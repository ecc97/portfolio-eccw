import { motion } from 'framer-motion';
import ScrollReveal from '../scroll/ScrollReveal';
import { skills } from '../../data/portfolio';
import * as SkillIcons from '../icons/SkillIcons';

type SkillCategory = 'frontend' | 'backend' | 'tools';

interface Skill {
    name: string;
    category: SkillCategory;
    level: number;
    icon: string;
}

interface CategoryLabels {
    frontend: string;
    backend: string;
    tools: string;
}

const Skills: React.FC = () => {
    const categories: CategoryLabels = {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas'
    };

    const groupedSkills: Record<SkillCategory, Skill[]> = {
        frontend: (skills as Skill[]).filter((s) => s.category === 'frontend'),
        backend: (skills as Skill[]).filter((s) => s.category === 'backend'),
        tools: (skills as Skill[]).filter((s) => s.category === 'tools')
    };

    const getIcon = (iconName: string) => {
        return (SkillIcons as Record<string, any>)[iconName] || SkillIcons.CodeIcon;
    };

    return (
        <section id="skills" className="section py-20 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid-bg" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient">Habilidades</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Tecnologías y herramientas que domino para crear soluciones web modernas
                        </p>
                    </div>
                </ScrollReveal>
                

                <div className="max-w-7xl mx-auto space-y-24">
                    {Object.keys(groupedSkills).map((category, catIndex) => {
                        const cat = category as SkillCategory;
                        return (
                            <ScrollReveal key={category} delay={catIndex * 0.2}>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                        {categories[cat]} 
                                    </h3>

                                    {/* 3D Floating Cards Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                        {groupedSkills[cat].map((skill: Skill, index: number) => {
                                            const IconComponent = getIcon(skill.icon);

                                            return (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                        duration: 0.6,
                                                        ease: [0.25, 0.46, 0.45, 0.94]
                                                    }}
                                                    style={{ perspective: 1000 }}
                                                    className="relative group"
                                                >
                                                    {/* 3D Card Container */}
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.1,
                                                            rotateY: 10,
                                                            rotateX: 10,
                                                            z: 50,
                                                            transition: { duration: 0.3 }
                                                        }}
                                                        className="relative h-full"
                                                        style={{
                                                            transformStyle: 'preserve-3d',
                                                            perspective: 1000
                                                        }}
                                                    >
                                                        {/* Glow Effect on Hover */}
                                                        <motion.div
                                                            className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                                                            style={{ zIndex: -1 }}
                                                        />

                                                        {/* Main Card */}
                                                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#151823] to-[#1a1d24] border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                                                            {/* Floating Icon */}
                                                            <motion.div
                                                                animate={{
                                                                    y: [0, -10, 0],
                                                                    rotate: [0, 5, -5, 0]
                                                                }}
                                                                transition={{
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    ease: 'easeInOut',
                                                                    delay: index * 0.2
                                                                }}
                                                                className="relative"
                                                            >
                                                                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/40 group-hover:to-blue-600/40 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                                                                    <IconComponent size={40} className="text-cyan-400" />
                                                                </div>
                                                            </motion.div>

                                                            {/* Skill Name */}
                                                            <h4 className="text-white font-bold text-lg text-center group-hover:text-cyan-400 transition-colors duration-300">
                                                                {skill.name} 
                                                            </h4>

                                                            {/* Animated Particles on Hover */}
                                                            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                                                        initial={{
                                                                            x: '50%',
                                                                            y: '50%',
                                                                            opacity: 0
                                                                        }}
                                                                        whileInView={{
                                                                            x: `${Math.random() * 100}%`,
                                                                            y: `${Math.random() * 100}%`,
                                                                            opacity: [0, 1, 0]
                                                                        }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            delay: i * 0.2,
                                                                            ease: 'easeOut'
                                                                        }}
                                                                    />
                                                                ))}
                                                            </div>

                                                            {/* Mastery Level Indicator (subtle) */}
                                                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <div className="flex gap-1">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <motion.div
                                                                            key={i}
                                                                            initial={{ scale: 0 }}
                                                                            whileInView={{ scale: 1 }}
                                                                            transition={{ delay: i * 0.1 }}
                                                                            className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(skill.level / 20)
                                                                                    ? 'bg-cyan-400'
                                                                                    : 'bg-gray-600'
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Specializations with 3D Effect */}
                <ScrollReveal delay={0.6}>
                    <div className="max-w-6xl mx-auto mt-32">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Especializaciones
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'UI/UX Implementation',
                                    description: 'Transformación de diseños en interfaces funcionales y responsivas',
                                    icon: 'Layers'
                                },
                                {
                                    title: 'Custom Hooks',
                                    description: 'Creación de hooks personalizados para lógica reutilizable',
                                    icon: 'GitBranch'
                                },
                                {
                                    title: 'API Integration',
                                    description: 'Consumo e integración de APIs REST y GraphQL',
                                    icon: 'Workflow'
                                },
                                {
                                    title: 'Component Architecture',
                                    description: 'Diseño de arquitecturas de componentes escalables',
                                    icon: 'Component'
                                }
                            ].map((spec, index) => {
                                const IconComp = getIcon(spec.icon);
                                return (
                                    <motion.div
                                        key={spec.title}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        whileHover={{
                                            scale: 1.05,
                                            rotateY: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                                        className="relative group"
                                    >
                                        <motion.div
                                            className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                            style={{ zIndex: -1 }}
                                        />
                                        <div className="p-8 rounded-2xl glass border border-white/10 group-hover:border-blue-400/50 transition-all duration-300 h-full">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 group-hover:from-blue-600/40 group-hover:to-cyan-500/40 transition-all duration-300">
                                                    <IconComp size={24} className="text-blue-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                                        {spec.title}
                                                    </h4>
                                                    <p className="text-gray-400 leading-relaxed">{spec.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Skills;