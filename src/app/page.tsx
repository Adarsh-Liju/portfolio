// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 bg-clip-text text-transparent mb-4">
              Adarsh Liju Abraham
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Python Engineer | System Engineer | Backend Developer
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📍</span>
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <span>8088229177</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📧</span>
                <a href="mailto:adarsh.liju.abraham@gmail.com" className="underline hover:text-blue-400 transition-colors">
                  adarsh.liju.abraham@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Link 
                href="https://www.linkedin.com/in/adarsh-liju-abraham" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/Adarsh-Liju" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">🎓</span>
              Education
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology, Computer Science</h3>
                <p className="text-gray-300 font-medium mb-2">PES University | 2020 — 2024</p>
                <p className="text-gray-300 text-sm">Relevant Coursework: Operating Systems, Computer Networks, Cloud Computing, Database Management Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">⚡</span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                                     {['JavaScript', 'Python', 'C', 'C++', 'PHP', 'Shell (Bash)', 'MySQL', 'Golang'].map((lang) => (
                     <span key={lang} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                       {lang}
                     </span>
                   ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Systems & Tools</h3>
                <div className="flex flex-wrap gap-2">
                                     {['Linux', 'SQL', 'Docker', 'Kernel Programming', 'Git', 'AWS'].map((tool) => (
                     <span key={tool} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                       {tool}
                     </span>
                   ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                                     {['Django', 'ReactJS', 'Flask', 'Pandas', 'OpenMP', 'MPI', 'SNMP'].map((framework) => (
                     <span key={framework} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                       {framework}
                     </span>
                   ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Languages Spoken</h3>
              <div className="flex flex-wrap gap-2">
                                 {['Malayalam (Fluent)', 'Hindi (Fluent)', 'English (Fluent)', 'Kannada (Conversational)'].map((lang) => (
                   <span key={lang} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                     {lang}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">💼</span>
              Professional Experience
            </h2>
            
            {/* Full Time Roles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Full Time Roles</h3>
              <div className="space-y-6">
                                 <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h4 className="text-lg font-semibold text-white">System Engineer</h4>
                     <span className="text-gray-300 text-sm">Nov '24 — Present</span>
                   </div>
                   <p className="text-gray-400 mb-3">Twospoon, Bengaluru</p>
                   <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Developed highly scalable Flask-based APIs handling 100K+ daily requests for a ReactJS frontend</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Architected and implemented microservices reducing deployment time by 40%</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Designed and deployed SNMP-based monitoring systems achieving 99.9% uptime</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Implemented comprehensive automation solutions reducing manual operations by 80%</span>
                     </li>
                   </ul>
                 </div>

                                 <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h4 className="text-lg font-semibold text-white">Python Engineer</h4>
                     <span className="text-gray-300 text-sm">May '24 — Nov '24</span>
                   </div>
                   <p className="text-gray-400 mb-3">Caliper Business Pvt. Ltd., Bengaluru</p>
                   <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Developed and maintained REST APIs using Django and Django REST Framework</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Built scalable Pandas-based APIs processing 1M+ records daily for data analytics</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Optimized backend performance, reducing API response time by 60%</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Scaled existing projects to support 5 new enterprise clients</span>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Internships */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Internships</h3>
              <div className="space-y-6">
                                 <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h4 className="text-lg font-semibold text-white">Developer & Analytics Intern</h4>
                     <span className="text-gray-300 text-sm">Feb '24 — May '24</span>
                   </div>
                   <p className="text-gray-400 mb-3">Caliper Business Pvt. Ltd. (Paid), Bengaluru</p>
                   <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Developed backend infrastructure for a planner application using Django, reducing response time by 40%</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Designed an intuitive frontend interface with ReactJS, improving user engagement by 25%</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Integrated AI models for demand prediction, achieving 85% accuracy in forecasting</span>
                     </li>
                   </ul>
                 </div>

                                 <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h4 className="text-lg font-semibold text-white">Subject Matter Expert — Linux</h4>
                     <span className="text-gray-300 text-sm">Jun '22 — Sep '23</span>
                   </div>
                   <p className="text-gray-400 mb-3">PESU I/O (Paid), Bengaluru</p>
                   <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Taught Linux fundamentals and command-line tools to 20+ students with 90% course completion rate</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Conducted hands-on sessions on kernel modules and system programming</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Led discussions on FOSS principles and Linux system concepts</span>
                     </li>
                   </ul>
                 </div>

                                 <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h4 className="text-lg font-semibold text-white">Research Intern</h4>
                     <span className="text-gray-300 text-sm">May '22 — Jul '22</span>
                   </div>
                   <p className="text-gray-400 mb-3">CHIPS, Bengaluru</p>
                   <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Conducted research on Manycore RISC-V architecture, focusing on parallel computing optimization</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Evaluated various RISC-V architectures to identify optimal design features for high-performance computing</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-gray-400 mt-1">•</span>
                       <span>Benchmarked OpenMP and MPI implementations to derive performance insights</span>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">🚀</span>
              Technical Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Project Turtle</h3>
                  <Link href="https://github.com/Adarsh-Liju/project-turtle" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-300 text-sm mb-3">Shell script for streamlined installation of essential tools on Linux systems with cross-distro support</p>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Shell</span>
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Linux</span>
                 </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Yet Another Markdown Converter</h3>
                  <Link href="https://github.com/Adarsh-Liju/yamc" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-300 text-sm mb-3">CLI tool to convert Markdown files to HTML with customizable theming and styling options</p>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">CLI</span>
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Markdown</span>
                 </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">DoctorPres</h3>
                  <Link href="https://github.com/Adarsh-Liju/doctorpres" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-300 text-sm mb-3">Doctor prescription system using Streamlit and MySQL with role-based access control</p>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Streamlit</span>
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">MySQL</span>
                 </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">EnigmaCipher</h3>
                  <Link href="https://github.com/Adarsh-Liju/enigmacipher" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-300 text-sm mb-3">Modern cryptographic system inspired by the Enigma machine with 95% code coverage</p>
                                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Python</span>
                   <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">Cryptography</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Publications Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">📚</span>
              Research Publications
            </h2>
            <div className="space-y-6">
                             <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                 <h3 className="text-lg font-semibold text-white mb-2">Enhancing Disaster Response: A Study on SDN-Integrated Alarm and Alert Systems Using Cooja Simulations</h3>
                 <p className="text-gray-300 text-sm mb-3">Published at NKCON 2023 (IEEE)</p>
                 <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex items-start gap-2">
                     <span className="text-gray-400 mt-1">•</span>
                     <span>Assessed SDN-integrated alarm systems using Cooja simulations to improve disaster response efficiency</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-gray-400 mt-1">•</span>
                     <span>Compared RPL and SDN protocols, proposing solutions for IoT network challenges</span>
                   </li>
                 </ul>
               </div>

                             <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
                 <h3 className="text-lg font-semibold text-white mb-2">ONOS SDN Framework: Assessing the Impact of Single and Multi-Controller Architectures on Network Efficiency</h3>
                 <p className="text-gray-300 text-sm mb-3">Published at SmartCom 2024 (Springer)</p>
                 <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex items-start gap-2">
                     <span className="text-gray-400 mt-1">•</span>
                     <span>Analyzed ONOS and Mininet in SDN, comparing single-controller and multi-controller architectures</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-gray-400 mt-1">•</span>
                     <span>Evaluated performance metrics like latency, throughput, scalability, and fault tolerance</span>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Final Year Project Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-gray-400">🎯</span>
              Final Year Project
            </h2>
                         <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-600">
               <h3 className="text-xl font-semibold text-white mb-3">Harnessing the Power of Blockchain in SDN for Distributed Applications</h3>
               <ul className="space-y-2 text-sm text-gray-300">
                 <li className="flex items-start gap-2">
                   <span className="text-gray-400 mt-1">•</span>
                   <span>Integrated blockchain with SDN to enhance security, reducing attack vectors by 60%</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-gray-400 mt-1">•</span>
                   <span>Developed an ONOS controller cluster achieving 95% availability</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-gray-400 mt-1">•</span>
                   <span>Evaluated performance metrics, identifying and mitigating 15 critical security vulnerabilities</span>
                 </li>
               </ul>
             </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-teal-400">🏆</span>
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Leadership & Activities</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Mentored students as a key member of HackerSpace Club, organizing hackathons and guiding innovative projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Led a team of 5 in a capstone project, managing timelines and fostering collaboration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Active contributor to open-source projects with 500+ GitHub contributions in the last year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Won first place in 3 national-level hackathons for innovative solutions in system design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Published technical articles on Medium with 10K+ monthly readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Holds AWS Solutions Architect Associate certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Good Human Certified Nice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
