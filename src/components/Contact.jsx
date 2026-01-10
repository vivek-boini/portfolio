import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';


const Contact = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasSimulated, setHasSimulated] = useState(false);
    const [isSequenceActive, setIsSequenceActive] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (isInView && !hasSimulated) {
            setHasSimulated(true);
            setIsSequenceActive(true);

            const runSequence = async () => {
                // Message 1 (Slower)
                setIsTyping(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setIsTyping(false);
                setMessages(prev => [...prev, { id: 1, text: "Hey! Thanks for stopping by!", sender: 'me' }]);

                // Delay before next typing
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Message 2
                setIsTyping(true);
                await new Promise(resolve => setTimeout(resolve, 2500));
                setIsTyping(false);
                setMessages(prev => [...prev, { id: 2, text: "I am open to conversations, collaborations, and cool projects.", sender: 'me' }]);

                // Delay before next typing
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Message 3
                setIsTyping(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setIsTyping(false);
                setMessages(prev => [...prev, { id: 3, text: "Message me here or reach out at +91 7207149867", sender: 'me' }]);

                setIsSequenceActive(false);
            };

            runSequence();
        }
    }, [isInView, hasSimulated]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Auto-reply with contact details
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const replyMsg = {
                id: Date.now() + 1,
                text: "Thanks for reaching out! You can contact me directly at vivekboini15@gmail.com or +91 7207149867.",
                sender: 'me'
            };
            setMessages(prev => [...prev, replyMsg]);
        }, 1000);
    };

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden" id="contact">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Info Side - Slides in from Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white md:w-1/2"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} className="w-12 h-12 bg-white rounded-xl" />
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
                            LET'S <span className="bg-white text-orange-500 px-2 rounded-lg">CHAT</span>
                        </h2>
                    </div>
                    <p className="text-orange-100 text-xl mb-8 max-w-md">
                        Have a project in mind? Looking for a partner? Or just want to say hi? I'm all ears.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-orange-50">
                            <Mail /> <span>vivekboini15@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-orange-50">
                            <MapPin /> <span>Hyderabad, India</span>
                        </div>
                        <div className="flex items-center gap-4 text-orange-50">
                            <Phone /> <span>+91 7207149867</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-10">
                        <motion.a
                            href="https://www.linkedin.com/in/vivek-boini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden bg-white"
                        >
                            <img
                                src="/linkedin.png"
                                alt="LinkedIn"
                                className="w-12 h-12 object-cover"
                            />
                        </motion.a>
                        <motion.a
                            href="https://github.com/vivek-boini"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden bg-white"
                        >
                            <img
                                src="/github.png"
                                alt="GitHub"
                                className="w-12 h-12 object-cover"
                            />
                        </motion.a>
                        <motion.a
                            href="https://leetcode.com/u/vivek_boini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden bg-white"
                        >
                            <img
                                src="/leetcode.png"
                                alt="LeetCode"
                                className="w-12 h-12 object-cover"
                            />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Chat Interface - Slides in from Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white rounded-3xl p-6 w-full max-w-md h-[500px] flex flex-col shadow-2xl skew-y-1"
                >
                    <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-4">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">N</div>
                        <div>
                            <h3 className="font-bold text-neutral-900">Vivek</h3>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-xs text-neutral-500">Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${msg.sender === 'user'
                                        ? 'bg-orange-500 text-white rounded-br-none'
                                        : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Typing Indicator */}
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex justify-start"
                            >
                                <div className="bg-neutral-100 p-4 rounded-2xl rounded-tl-none flex gap-2 items-center">
                                    <motion.span
                                        className="w-2 h-2 bg-neutral-400 rounded-full"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                    />
                                    <motion.span
                                        className="w-2 h-2 bg-neutral-400 rounded-full"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                    />
                                    <motion.span
                                        className="w-2 h-2 bg-neutral-400 rounded-full"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <form onSubmit={handleSend} className="mt-4 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={isSequenceActive ? "Please wait..." : "Type a message..."}
                            disabled={isSequenceActive}
                            className={`flex-1 bg-neutral-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 ${isSequenceActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                        <button
                            type="submit"
                            disabled={isSequenceActive}
                            className={`bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors ${isSequenceActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
