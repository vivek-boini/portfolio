import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        tagline: "ML & ANALYTICS",
        title: "Customer Churn Prediction",
        description: "End-to-end churn prediction system using XGBoost & Random Forest. Integrated with Power BI for interactive business insights and retention strategies.",
        stack: "Python • XGBoost • Power BI • Scikit-learn",
        image: "/projects/ML-Dashboard.png",
        githubLink: "https://github.com/vivek-boini/FUTURE_ML_02",
        liveLink: "#"
    },
    {
        id: 2,
        tagline: "FULL-STACK MERN PLATFORM",
        title: "FurniDecor",
        description: "Full-stack furniture marketplace with Admin Dashboard and Customer Client. Features secure auth, Cloudinary image management, and separate admin/user portals.",
        stack: "MERN Stack • Cloudinary • Render • Vite",
        image: "/projects/furniture.png",
        githubLink: "https://github.com/vivek-boini/furniture",
        liveLink: "https://furnidecor.onrender.com/"
    },
    {
        id: 3,
        tagline: "FULL STACK BLOGGING",
        title: "Narrative",
        description: "Full-stack blogging platform with JWT authentication, CRUD functionality, and protected routes. Built with MERN stack and secure API design.",
        stack: "React • Node.js • Express • MongoDB • JWT",
        image: "/projects/narrative.png",
        githubLink: "https://github.com/vivek-boini/Narrative",
        liveLink: "#"
    }
];





const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="py-8 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden" id="projects">
            <div className="container mx-auto px-4 flex flex-col items-center">

                {/* Header */}
                <div className="flex items-center gap-4 mb-2">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="w-10 h-10 bg-primary-500 rounded-xl"
                    />
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
                        MY <span className="bg-white text-neutral-900 px-2 rounded-lg">PROJECTS.</span>
                    </h2>
                    <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="w-10 h-10 bg-primary-500 rounded-xl"
                    />
                </div>

                {/* Carousel Grid */}
                <div className="relative w-full max-w-7xl h-[650px] md:h-[550px] flex items-center justify-center">
                    {projects.map((project, index) => {
                        // Calculate offset logic for generic carousel feel
                        const offset = index - activeIndex;

                        // Determine visual state
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={project.id}
                                className={`absolute w-full max-w-5xl touch-none ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer hover:opacity-80'}`}
                                onClick={() => !isActive && (offset > 0 ? nextProject() : prevProject())}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.7}
                                dragMomentum={false}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = Math.abs(offset.x) * velocity.x;
                                    if (offset.x > 50) { // Reduced threshold for easier swipe
                                        prevProject();
                                    } else if (offset.x < -50) {
                                        nextProject();
                                    }
                                }}
                                animate={{
                                    x: offset * 120, // Stacked fan effect
                                    rotate: offset * 2,
                                    scale: 1 - Math.abs(offset) * 0.05,
                                    zIndex: 50 - Math.abs(offset), // Ensure center is always on top
                                    opacity: 1 - Math.abs(offset) * 0.1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400, // Faster
                                    damping: 40,
                                    mass: 1,
                                }}
                            >
                                {/* Card */}
                                <div className={`relative overflow-hidden rounded-3xl transition-colors duration-500 h-full flex flex-col md:block ${isActive ? 'bg-neutral-800 text-white shadow-2xl shadow-black/50' : 'bg-neutral-900 text-neutral-400'}`}>

                                    <div className="grid md:grid-cols-2 gap-0 md:gap-6 h-full">

                                        {/* Left: Content */}
                                        <div className="p-6 md:p-12 flex flex-col justify-center items-start text-left order-2 md:order-1 flex-1">
                                            <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-4 ${isActive ? 'bg-orange-500 text-white' : 'bg-neutral-800 text-neutral-500'}`}>
                                                {project.tagline}
                                            </span>

                                            <h3 className={`text-2xl md:text-4xl font-black mb-3 md:mb-4 leading-none uppercase ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                                                {project.title}
                                            </h3>

                                            <p className={`font-medium leading-relaxed mb-6 text-lg ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.stack.split(' • ').map((tech, i) => (
                                                    <span key={i} className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded bg-white/5 ${isActive ? 'text-orange-500' : 'text-neutral-600'}`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3">
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 text-xs md:text-sm font-bold uppercase border-2 px-5 py-2.5 rounded-full transition-colors ${isActive ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-neutral-700 text-neutral-600 cursor-not-allowed pointer-events-none'}`}
                                                >
                                                    <Github size={16} /> Code
                                                </a>
                                                {project.liveLink && project.liveLink !== "#" && (
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center gap-2 text-xs md:text-sm font-bold uppercase border-2 px-5 py-2.5 rounded-full transition-colors ${isActive ? 'bg-white text-neutral-900 border-white hover:bg-neutral-200' : 'border-neutral-700 text-neutral-600 cursor-not-allowed pointer-events-none'}`}
                                                    >
                                                        <ExternalLink size={16} /> Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right: Image */}
                                        <div className="relative h-64 md:h-full min-h-[400px] w-full bg-neutral-900 overflow-hidden order-1 md:order-2 group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 md:hidden" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                draggable="false"
                                                className={`w-full h-full object-cover object-left-top transition-transform duration-700 pointer-events-none select-none ${isActive ? 'scale-105 group-hover:scale-110' : 'scale-100 grayscale opacity-50'}`}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-8 mt-4 z-30">
                    <button
                        onClick={prevProject}
                        className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-orange-600 active:scale-95 transition-all text-white shadow-lg shadow-orange-500/20"
                    >
                        <ArrowLeft size={24} strokeWidth={3} />
                    </button>
                    <button
                        onClick={nextProject}
                        className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-orange-600 active:scale-95 transition-all text-white shadow-lg shadow-orange-500/20"
                    >
                        <ArrowRight size={24} strokeWidth={3} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
