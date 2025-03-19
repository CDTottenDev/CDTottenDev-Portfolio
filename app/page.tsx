"use client"

// pages/index.tsx
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideCode, Github, Linkedin, Mail, Zap, Coffee, Heart } from 'lucide-react';
import dynamic from 'next/dynamic'

// Add this near the top of the file, outside the component
const CodeParticles = dynamic(() => import('./components/CodeParticles'), {
  ssr: false
})

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  
  const [skills] = useState([
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "GraphQL", level: 75 },
  ]);
  
  // Console easter egg
  useEffect(() => {
    console.log("%cWell hello there, curious developer! 👋", "font-size: 20px; font-weight: bold; color: #6366f1;");
    console.log("%cSince you're inspecting my code, you might as well hire me 😉", "font-size: 16px; color: #4f46e5;");
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Head>
        <title>Your Name | Full-Stack Developer</title>
        <meta name="description" content="Making the web less boring, one pixel at a time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Hero section with parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background elements */}
        <motion.div style={{ y: y3, opacity: opacity1 }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-700/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Replace the existing particles code with this */}
        <CodeParticles />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            I Build Websites That Don't Suck
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Full-stack developer who turns caffeine into code. My sites are like my humor – clean, functional, and occasionally refreshing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
              <Zap className="h-5 w-5" />
              Let's Work Together
            </a>
            <a href="#projects" className="bg-transparent border border-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-600/10 transition-colors flex items-center justify-center gap-2">
              See My Work
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About section with parallax */}
      <section id="about" className="relative py-24 bg-slate-800">
        <motion.div style={{ y: y2 }} className="absolute -top-40 right-0 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl"></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-slate-300 mb-4">
                I'm not your average developer who thinks "responsive design" means answering emails on weekends. I craft digital experiences that actually work—on all devices, even that ancient iPhone your mom refuses to upgrade.
              </p>
              <p className="text-slate-300 mb-4">
                After 5+ years of turning coffee into code, I've mastered the art of making websites that don't just look pretty—they actually convert visitors into customers. Revolutionary concept, I know.
              </p>
              <p className="text-slate-300 mb-6">
                When I'm not fighting with CSS, you can find me explaining to my non-tech friends that no, I can't fix their printer.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:your@email.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-slate-400 text-sm">terminal</div>
                </div>
                <div className="font-mono text-sm">
                  <p className="text-green-400">$ whoami</p>
                  <p className="text-slate-300">full-stack-developer</p>
                  <p className="text-green-400">$ skills</p>
                  <p className="text-slate-300">["React", "TypeScript", "Next.js", "Node.js", "GraphQL"]</p>
                  <p className="text-green-400">$ current_status</p>
                  <p className="text-slate-300">Building awesome web experiences</p>
                  <p className="text-green-400 flex items-center">
                    <span className="animate-pulse mr-0.5">▋</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="relative py-24 bg-slate-900">
        <motion.div style={{ y: y1, opacity: opacity2 }} className="absolute -top-40 left-20 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl"></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Technical Skills</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Yes, I can center a div. And do much more complex things too, but let's be honest: centering a div is the true test of a developer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 bg-slate-800/50 rounded-lg border border-slate-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">The Tech Stack I Actually Enjoy Using</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Next.js", "React", "TypeScript", "Tailwind CSS", 
                  "Node.js", "GraphQL", "PostgreSQL", "MongoDB",
                  "Redux", "Jest", "Cypress", "Docker"
                ].map((tech, index) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/50 p-3 rounded flex items-center justify-center text-center hover:bg-indigo-600/20 transition-colors border border-slate-600 hover:border-indigo-500 cursor-pointer"
                  >
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="relative py-24 bg-slate-800">
        <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute -top-40 right-20 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl"></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">My Work</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Projects I've built that didn't make me question my career choices. Too much.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "H3 Excavation & Construction",
                  description: "Professional website for a construction and excavation company showcasing services, projects, and company information to attract potential clients.",
                  tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Responsive Design", "Google Maps API"],
                  image: "/images/project 2/landing-light.png"
                },
                {
                  title: "InventoryPro: Small Business Inventory Management",
                  description: "Cross-platform inventory management application for small to medium-sized retailers to track stock, manage suppliers, and generate reports.",
                  tech: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "ML Kit", "Google Cloud Functions"],
                  image: "/images/project 5/inventorypro-desktop.svg"
                },
                {
                  title: "FieldSync: Construction Site Management App",
                  description: "Mobile application for construction managers to coordinate teams, track progress, and manage resources across multiple job sites.",
                  tech: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "AWS S3", "Push Notifications"],
                  image: "/images/project 4/medtrack.svg"
                },
              ].map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1 group"
                >
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-slate-800 text-indigo-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a href="/projects" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        View Project
                      </a>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a href="/projects" className="inline-flex items-center justify-center gap-2 bg-indigo-600/20 text-indigo-400 px-6 py-3 rounded-lg font-medium hover:bg-indigo-600/30 transition-colors border border-indigo-500/30">
                View All Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Client Feedback</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Nice things people have said about me (that weren't coerced in any way).
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Johnson",
                  role: "Marketing Director",
                  content: "Working with this developer was surprisingly painless. Our website not only looks great but actually functions properly—a rare combo in my experience."
                },
                {
                  name: "Sarah Williams",
                  role: "Startup Founder",
                  content: "I explained my vague idea for an app, and somehow they turned my incoherent ramblings into exactly what I needed. Actual wizardry involved."
                },
                {
                  name: "Michael Chen",
                  role: "E-commerce Manager",
                  content: "Our conversion rate increased 40% after the redesign. Would hire again just for the sarcastic project updates alone."
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative py-24 bg-slate-800">
        <motion.div style={{ y: y1 }} className="absolute -top-40 left-10 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></motion.div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-lg p-8 border border-slate-700"
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Let's Work Together</h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Got a project in mind? Let's talk about how I can help you build something awesome.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div>
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 rounded-md transition-colors font-medium flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:your@email.com" className="text-slate-400 hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm">
                  Based in San Francisco, CA • Available for remote work
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}