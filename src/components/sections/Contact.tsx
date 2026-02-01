import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../scroll/ScrollReveal';
import { Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../../hooks/useToasts';
import { actions } from 'astro:actions';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { data, error } = await actions.send(formData);

        if (!error) {
            toast({
                title: '¡Mensaje enviado!',
                description: 'Gracias por contactarme. Te responderé pronto.',
            });
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast({
                title: 'Error al enviar',
                description: error.message || 'Hubo un problema, intenta de nuevo.',
            });
            console.error(error);
        }
        
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section py-20 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient">Trabajemos Juntos</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            ¿Tienes un proyecto en mente? Contáctame y hagamos realidad tu idea
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <ScrollReveal direction="left">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    Información de Contacto
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Estoy disponible para proyectos freelance, colaboraciones o simplemente para
                                    charlar sobre desarrollo web. No dudes en contactarme.
                                </p>
                            </div>

                            {/* Contact Items */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Mail,
                                        label: 'Email',
                                        value: 'ecc9703@gmail.com',
                                        href: 'mailto:ecc9703@gmail.com'
                                    },
                                    {
                                        icon: MapPin,
                                        label: 'Ubicaci\u00f3n',
                                        value: 'Colombia, Medellín - Disponible para trabajo remoto',
                                        href: null
                                    }
                                ].map((item) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <motion.div
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                                        >
                                            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                                                <Icon size={24} className="text-cyan-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                                                <p className="text-gray-400">{item.value}</p>
                                            </div>
                                        </motion.div>
                                    );

                                    return item.href ? (
                                        <a key={item.label} href={item.href}>
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    );
                                })}
                            </div>

                            {/* Decorative Element - Animated Envelope */}
                            <motion.div
                                className="relative h-64 rounded-2xl overflow-hidden glass border border-white/10 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-purple-600/20" />
                                <div className="absolute inset-0 grid-bg opacity-30" />
                                
                                {/* Animated Envelope */}
                                <motion.div
                                    className="relative w-32 h-24"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                >
                                    {/* Envelope Body */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {/* Envelope Flap */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg"
                                            style={{
                                                clipPath: 'polygon(0 0, 50% 60%, 100% 0, 100% 0, 50% 60%, 0 0)',
                                            }}
                                            animate={{
                                                rotateX: [0, -45, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 0.5
                                            }}
                                        />
                                        
                                        {/* Letter inside */}
                                        <motion.div
                                            className="absolute inset-2 bg-white/10 rounded-sm border border-white/20"
                                            animate={{
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 0.3
                                            }}
                                        >
                                            {/* Letter lines */}
                                            <div className="p-2 space-y-1">
                                                <div className="h-1 bg-white/30 rounded w-3/4" />
                                                <div className="h-1 bg-white/20 rounded w-full" />
                                                <div className="h-1 bg-white/20 rounded w-5/6" />
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Floating particles around envelope */}
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
                                            animate={{
                                                x: [0, Math.cos(i * Math.PI / 2) * 40, 0],
                                                y: [0, Math.sin(i * Math.PI / 2) * 40, 0],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: 'easeInOut'
                                            }}
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: '-3px',
                                                marginTop: '-3px'
                                            }}
                                        />
                                    ))}
                                </motion.div>

                                {/* Glow effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    animate={{
                                        boxShadow: [
                                            'inset 0 0 20px rgba(6, 182, 212, 0.1)',
                                            'inset 0 0 40px rgba(6, 182, 212, 0.3)',
                                            'inset 0 0 20px rgba(6, 182, 212, 0.1)',
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white transition-all duration-300"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white transition-all duration-300"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white transition-all duration-300 resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Enviar Mensaje</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
