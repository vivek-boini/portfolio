import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Award } from 'lucide-react';

const certificates = [
    {
        title: "Salesforce Agentforce Specialist",
        issuer: "Salesforce",
        date: "2025",
        summary: "Specialized certification in deploying and managing AI agents within the Salesforce ecosystem.",
        id: "salesforce-agent",
        color: "text-blue-500",
        link: "/certificates/Salesforce_Agentforce_Specialist.pdf",
        image: "/certificates/salesforce-logo.png"
    },
    {
        title: "MongoDB Associate Developer",
        issuer: "MongoDB",
        date: "2025",
        summary: "Comprehensive foundation in NoSQL database management, aggregation, and data modeling.",
        id: "mongodb-associate",
        color: "text-green-500",
        link: "/certificates/Mongodb-certificate.pdf",
        image: "/certificates/mongodb-logo.png"
    },
    {
        title: "Joy of Computing using Python",
        issuer: "NPTEL",
        date: "2024",
        summary: "In-depth course on Python programming paradigms, algorithmic thinking, and problem solving.",
        id: "python-nptel",
        color: "text-yellow-500",
        link: "/certificates/Joy of computing Nptel.pdf",
        image: "/certificates/nptel-logo.png"
    }
];

const Certificates = () => {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden" id="certificates">
            {/* Unique Background Pattern: Tech Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-12 md:mb-20">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                            className="w-12 h-12 bg-primary-500 rounded-xl"
                        />
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
                            MY <span className="bg-white text-neutral-900 px-2 rounded-lg">CREDENTIALS</span>
                        </h2>
                        <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                            className="w-12 h-12 bg-primary-500 rounded-xl"
                        />
                    </div>
                    <p className="text-neutral-400 max-w-xl mx-auto text-center">
                        Validated expertise. Click to verify the official documentation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group relative"
                        >
                            {/* Card - Document Style */}
                            <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] flex flex-col">

                                {/* Top "Hole" detail for document look */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-900/50 rounded-b-xl border-x border-b border-white/10 backdrop-blur-sm z-20"></div>

                                {/* Top Right Icon */}
                                <div className="absolute top-4 right-4 p-2 bg-neutral-900/50 rounded-full border border-white/10 z-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    <Award size={16} className={`${cert.color}`} />
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col items-center text-center flex-1 z-10">

                                    {/* Image Area */}
                                    <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden mb-6 transition-all duration-300 relative flex items-center justify-center p-4">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-lg"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="w-full">
                                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-4">{cert.issuer} • {cert.date}</p>

                                        {/* Context Line */}
                                        <p className="text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                            {cert.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Overlay Actions */}
                                <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 z-20 translate-y-4 group-hover:translate-y-0">
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full font-bold hover:bg-primary-600 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary-500/50">
                                        <ExternalLink size={20} /> View Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Certificates;
