import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section ref={sectionRef} className="h-screen w-full bg-gradient-to-b from-neutral-50 to-orange-100 text-neutral-900 flex flex-col items-center justify-center overflow-hidden relative" id="resume">

            {/* Background Decoration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                    <Download size={800} strokeWidth={0.5} />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-12">

                {/* Header - Slide from Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex items-center justify-center gap-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                            className="w-12 h-12 bg-primary-500 rounded-xl"
                        />
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-neutral-900 tracking-tighter">
                            MY <span className="bg-neutral-900 text-white px-2 rounded-lg">RESUME</span>
                        </h2>
                        <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                            className="w-12 h-12 bg-primary-500 rounded-xl"
                        />
                    </div>

                    <p className="text-2xl text-neutral-500 font-medium max-w-xl text-center leading-relaxed">
                        Grab a copy of my full professional profile to keep offline or share with your team.
                    </p>
                </motion.div>

                {/* Action Buttons - Slide from Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-6 mt-4"
                >
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-10 py-5 bg-neutral-100 text-neutral-900 rounded-full font-black text-xl border-2 border-neutral-200 hover:border-primary-500 transition-all hover:bg-white hover:shadow-2xl"
                    >
                        View Online
                    </motion.a>

                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-full font-black text-xl shadow-xl hover:bg-primary-500 transition-colors"
                    >
                        <Download className="group-hover:animate-bounce" size={24} /> Download PDF
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
