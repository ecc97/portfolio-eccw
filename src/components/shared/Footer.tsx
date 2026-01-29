import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:edwin@example.com', label: 'Email' }
    ];

    return (
        <footer className="bg-[#0f1419] border-t border-white/10 py-12">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold text-gradient mb-2">Edwin Carmona</h3>
                        <p className="text-gray-400">Frontend Developer</p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-white/10 hover:border-cyan-400/50"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-gray-500 text-sm flex items-center gap-1"
                    >
                        <span>© {new Date().getFullYear()} Hecho con</span>
                        <Heart size={16} className="text-red-500" />
                        <span>por Edwin Carmona</span>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;