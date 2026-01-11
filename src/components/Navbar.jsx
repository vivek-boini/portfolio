import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, PenTool, Award, FileText, Mail, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Tools', href: '#tools', icon: PenTool },
    { name: 'Certificates', href: '#certificates', icon: Award },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${scrolled
                    ? 'py-4 bg-white/80 backdrop-blur-md shadow-lg border-b border-neutral-200/50'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="text-2xl font-black tracking-tighter text-neutral-900 group flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-orange-500 rounded-lg rotate-3 group-hover:rotate-12 transition-transform duration-300"></div>
                        VIVEK.
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-neutral-200/50 shadow-sm">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeSection === item.href.substring(1)
                                    ? 'bg-neutral-900 text-white shadow-md'
                                    : 'text-neutral-600 hover:text-orange-600 hover:bg-orange-50'
                                    }`}
                            >
                                <item.icon size={16} />
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-neutral-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[70px] left-4 right-4 z-[980] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden md:hidden max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`px-6 py-4 rounded-2xl text-lg font-bold flex items-center gap-4 ${activeSection === item.href.substring(1)
                                        ? 'bg-neutral-900 text-white'
                                        : 'bg-neutral-50 text-neutral-600'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
