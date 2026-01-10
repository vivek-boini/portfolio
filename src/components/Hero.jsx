import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const titles = ["Full Stack Developer", "Software Developer"];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000;

    React.useEffect(() => {
        const i = loopNum % titles.length;
        const fullText = titles[i];

        let timer;

        if (isDeleting) {
            if (text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            } else {
                timer = setTimeout(() => {
                    setText(fullText.substring(0, text.length - 1));
                }, deletingSpeed);
            }
        } else {
            if (text === fullText) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            } else {
                timer = setTimeout(() => {
                    setText(fullText.substring(0, text.length + 1));
                }, typingSpeed);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-white via-white to-orange-50" id="home">

            {/* Central Orange Sunburst Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />



            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-6 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                        <span className="text-orange-600 font-medium tracking-wide text-sm uppercase">Available for work</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-2 tracking-widest uppercase">
                        Namaste, I'm
                    </h2>

                    <motion.h1
                        className="text-[12vw] md:text-[10rem] font-black text-neutral-900 tracking-tighter mb-8 leading-[0.8] select-none"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        VIVEK.
                    </motion.h1>

                    <div className="h-8 md:h-12 overflow-hidden relative mb-10 w-full flex justify-center items-center">
                        <span className="text-2xl md:text-4xl font-bold text-neutral-800">
                            {text}
                            <span className="animate-pulse text-orange-600">|</span>
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#projects" className="px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg">
                            See My Work
                        </a>
                        <a href="#contact" className="px-10 py-5 border-2 border-neutral-200 text-neutral-900 font-bold rounded-full hover:bg-neutral-900 hover:text-white transition-all hover:-translate-y-1 text-lg">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
