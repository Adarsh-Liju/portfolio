"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.8 } },
});

const slideInFromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { delay, duration: 0.8 } },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { delay, duration: 0.6 } },
});

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <motion.main 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Adarsh Liju Abraham
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Python Engineer | System Engineer | Backend Developer
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 mb-8 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-white">📍</span>
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-white">📞</span>
                <span>8088229177</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-white">📧</span>
                <a href="mailto:adarsh.liju.abraham@gmail.com" className="underline hover:text-white transition-colors">
                  adarsh.liju.abraham@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://www.linkedin.com/in/adarsh-liju-abraham" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg transition-all duration-300 font-inter font-medium hover:bg-gray-200 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://github.com/Adarsh-Liju" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg transition-all duration-300 font-inter font-medium hover:bg-gray-800 hover:shadow-lg border border-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(0.2)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">🎓</span>
              Education
            </h2>
            <div className="space-y-4">
              <motion.div 
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2 font-inter">Bachelor of Technology, Computer Science</h3>
                <p className="text-gray-300 font-medium mb-2 font-inter">PES University | 2020 — 2024</p>
                <p className="text-gray-300 text-sm font-inter">Relevant Coursework: Operating Systems, Computer Networks, Cloud Computing, Database Management Systems</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(0.4)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">⚡</span>
              Technical Skills
            </h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { heading: "Programming Languages", tags: ['JavaScript', 'Python', 'C', 'C++', 'PHP', 'Shell (Bash)', 'MySQL', 'Golang'] },
                { heading: "Systems & Tools", tags: ['Linux', 'SQL', 'Docker', 'Kernel Programming', 'Git', 'AWS'] },
                { heading: "Frameworks", tags: ['Django', 'ReactJS', 'Flask', 'Pandas', 'OpenMP', 'MPI', 'SNMP'] },
              ].map((group, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                  variants={scaleIn(i * 0.1)}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3 font-inter">{group.heading}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 font-mono hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-6 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-lg font-semibold text-white mb-3 font-inter">Languages Spoken</h3>
              <div className="flex flex-wrap gap-2">
                {['Malayalam (Fluent)', 'Hindi (Fluent)', 'English (Fluent)', 'Kannada (Conversational)'].map((lang) => (
                  <motion.span 
                    key={lang} 
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 font-mono hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(0.6)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">💼</span>
              Professional Experience
            </h2>
            
            {/* Full Time Roles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 font-inter">Full Time Roles</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "System Engineer",
                    period: "Nov '24 — Present",
                    company: "Twospoon, Bengaluru",
                    points: [
                      "Developed highly scalable Flask-based APIs handling 100K+ daily requests for a ReactJS frontend",
                      "Architected and implemented microservices reducing deployment time by 40%",
                      "Designed and deployed SNMP-based monitoring systems achieving 99.9% uptime",
                      "Implemented comprehensive automation solutions reducing manual operations by 80%"
                    ]
                  },
                  {
                    title: "Python Engineer",
                    period: "May '24 — Nov '24",
                    company: "Caliper Business Pvt. Ltd., Bengaluru",
                    points: [
                      "Developed and maintained REST APIs using Django and Django REST Framework",
                      "Built scalable Pandas-based APIs processing 1M+ records daily for data analytics",
                      "Optimized backend performance, reducing API response time by 60%",
                      "Scaled existing projects to support 5 new enterprise clients"
                    ]
                  }
                ].map((role, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white/5 rounded-lg p-6 border-l-4 border-white hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white font-inter">{role.title}</h4>
                      <span className="text-gray-300 text-sm font-inter">{role.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3 font-inter">{role.company}</p>
                      <ul className="list-disc space-y-2 text-sm font-sans text-white pl-4">
                      {role.points.map((point, j) => (
                        <li key={j} className="text-white">{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 font-inter">Internships</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Developer & Analytics Intern",
                    period: "Feb '24 — May '24",
                    company: "Caliper Business Pvt. Ltd. (Paid), Bengaluru",
                    points: [
                      "Developed backend infrastructure for a planner application using Django, reducing response time by 40%",
                      "Designed an intuitive frontend interface with ReactJS, improving user engagement by 25%",
                      "Integrated AI models for demand prediction, achieving 85% accuracy in forecasting"
                    ]
                  },
                  {
                    title: "Subject Matter Expert — Linux",
                    period: "Jun '22 — Sep '23",
                    company: "PESU I/O (Paid), Bengaluru",
                    points: [
                      "Taught Linux fundamentals and command-line tools to 20+ students with 90% course completion rate",
                      "Conducted hands-on sessions on kernel modules and system programming",
                      "Led discussions on FOSS principles and Linux system concepts"
                    ]
                  },
                  {
                    title: "Research Intern",
                    period: "May '22 — Jul '22",
                    company: "CHIPS, Bengaluru",
                    points: [
                      "Conducted research on Manycore RISC-V architecture, focusing on parallel computing optimization",
                      "Evaluated various RISC-V architectures to identify optimal design features for high-performance computing",
                      "Benchmarked OpenMP and MPI implementations to derive performance insights"
                    ]
                  }
                ].map((internship, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white/5 rounded-lg p-6 border-l-4 border-white hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white font-inter">{internship.title}</h4>
                      <span className="text-gray-300 text-sm font-inter">{internship.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3 font-inter">{internship.company}</p>
                    <ul className="space-y-2 text-sm text-gray-300 font-inter pl-4">
                      {internship.points.map((point, j) => (
                        <li key={j} className="text-white">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(0.8)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">🚀</span>
              Technical Projects
            </h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  title: "Project Turtle",
                  description: "Shell script for streamlined installation of essential tools on Linux systems with cross-distro support",
                  link: "https://github.com/Adarsh-Liju/project-turtle",
                  tags: ["Shell", "Linux"]
                },
                {
                  title: "Yet Another Markdown Converter",
                  description: "CLI tool to convert Markdown files to HTML with customizable theming and styling options",
                  link: "https://github.com/Adarsh-Liju/yamc",
                  tags: ["CLI", "Markdown"]
                },
                {
                  title: "DoctorPres",
                  description: "Doctor prescription system using Streamlit and MySQL with role-based access control",
                  link: "https://github.com/Adarsh-Liju/doctorpres",
                  tags: ["Streamlit", "MySQL"]
                },
                {
                  title: "EnigmaCipher",
                  description: "Modern cryptographic system inspired by the Enigma machine with 95% code coverage",
                  link: "https://github.com/Adarsh-Liju/enigmacipher",
                  tags: ["Python", "Cryptography"]
                }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                  variants={scaleIn(i * 0.1)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white font-inter">{project.title}</h3>
                    <Link href={project.link} className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 font-inter">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="px-2 py-1 bg-white/10 text-white rounded text-xs font-mono hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Research Publications Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(1.0)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">📚</span>
              Research Publications
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Enhancing Disaster Response: A Study on SDN-Integrated Alarm and Alert Systems Using Cooja Simulations",
                  venue: "Published at NKCON 2023 (IEEE)",
                  points: [
                    "Assessed SDN-integrated alarm systems using Cooja simulations to improve disaster response efficiency",
                    "Compared RPL and SDN protocols, proposing solutions for IoT network challenges"
                  ]
                },
                {
                  title: "ONOS SDN Framework: Assessing the Impact of Single and Multi-Controller Architectures on Network Efficiency",
                  venue: "Published at SmartCom 2024 (Springer)",
                  points: [
                    "Analyzed ONOS and Mininet in SDN, comparing single-controller and multi-controller architectures",
                    "Evaluated performance metrics like latency, throughput, scalability, and fault tolerance"
                  ]
                }
              ].map((pub, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/5 rounded-lg p-6 border-l-4 border-white hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2 font-inter">{pub.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 font-inter">{pub.venue}</p>
                  <ul className="space-y-2 text-sm text-gray-300 font-inter pl-4">
                    {pub.points.map((point, j) => (
                      <li key={j} className="text-white">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Final Year Project Section */}
        <motion.section 
          className="mb-16"
          {...fadeIn(1.2)}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <span className="text-white">🎯</span>
              Final Year Project
            </h2>
            <motion.div 
              className="bg-white/5 rounded-lg p-6 border-l-4 border-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3 font-inter">Harnessing the Power of Blockchain in SDN for Distributed Applications</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-inter pl-4">
                <li className="text-white">
                  Integrated blockchain with SDN to enhance security, reducing attack vectors by 60%
                </li>
                <li className="text-white">
                  Developed an ONOS controller cluster achieving 95% availability
                </li>
                <li className="text-white">
                  Evaluated performance metrics, identifying and mitigating 15 critical security vulnerabilities
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        </motion.main>
        </div>
  );
}
