
import React, { useRef } from 'react';
import { motion } from 'framer-motion';


const tools = [
    { name: "HTML5", image: "/stack/HTML5.png" },
    { name: "CSS3", image: "/stack/css.svg" },
    { name: "Java", image: "/stack/java.svg" },
    { name: "JavaScript", image: "/stack/javascript.png" },
    { name: "MongoDB", image: "/stack/mongodb.svg" },
    { name: "MySQL", image: "/stack/mysql.svg" },
    { name: "Node.js", image: "/stack/nodejs.svg" },
    { name: "Python", image: "/stack/python.png" },
    { name: "React", image: "/stack/react.svg" },
    { name: "Salesforce", image: "/stack/salesforce.png" },
    { name: "express", image: "/stack/express.svg" },
    { name: "git", image: "/stack/git.svg" },
    { name: "Power BI", image: "/stack/PowerBi.png" }
];

const Tools = () => {
    const constraintsRef = useRef(null);

    return (
        <section ref={constraintsRef} className="py-16 md:py-32 bg-gradient-to-b from-neutral-100 via-white to-orange-50 overflow-hidden min-h-screen relative flex flex-col justify-center" id="tools">

            {/* Huge Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[25vw] font-black text-neutral-900 leading-none">STACK</span>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="flex items-center gap-4 mb-10 justify-center">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="w-12 h-12 bg-primary-500 rounded-xl"
                    />
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-neutral-900 tracking-tighter">
                        MY <span className="bg-neutral-900 text-white px-2 rounded-lg">TECH STACK</span>
                    </h2>
                    <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="w-12 h-12 bg-primary-500 rounded-xl"
                    />
                </div>

                <p className="text-neutral-500 mb-20 text-xl font-medium">
                    Try dragging them
                </p>

                {/* Draggable Icons Grid */}
                <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto relative">
                    {tools.map((tool, index) => (
                        <ToolIcon key={index} tool={tool} constraintsRef={constraintsRef} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ToolIcon = ({ tool, constraintsRef }) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.2, rotate: 5, zIndex: 50, cursor: 'grabbing' }}
            whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            className="w-24 h-24 rounded-2xl bg-white border-2 border-neutral-200 flex flex-col items-center justify-center shadow-2xl shadow-neutral-200/50 cursor-grab active:cursor-grabbing hover:border-orange-500 hover:text-orange-500 transition-colors group p-4"
        >
            <img src={tool.image} alt={tool.name} className="w-10 h-10 object-contain pointer-events-none" />
            <span className="text-[10px] font-bold mt-2 uppercase tracking-wider opacity-60 group-hover:text-orange-500 transition-colors">{tool.name}</span>
        </motion.div>
    );
};

export default Tools;

