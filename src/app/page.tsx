// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-gray-100">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Adarsh Liju Abraham</h1>
        <p className="text-lg text-gray-400">Python Engineer | System Engineer | Backend Developer</p>
        <p className="mt-2 text-sm text-gray-400">📍 Bengaluru, India | 📞 8088229177 | 📧 <a href="mailto:adarsh.liju.abraham@gmail.com" className="underline">adarsh.liju.abraham@gmail.com</a></p>
        <div className="mt-2 flex gap-4">
          <Link href="https://www.linkedin.com/in/adarsh-liju-abraham" className="underline text-blue-400">LinkedIn</Link>
          <Link href="https://github.com/Adarsh-Liju" className="underline text-blue-400">GitHub</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p><strong>B.Tech in Computer Science</strong>, PES University (2020-2024)</p>
        <p className="text-sm text-gray-400">Courses: OS, Networks, Cloud, DBMS</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li><strong>Languages:</strong> JS, Python, C/C++, PHP, Bash, MySQL, Go</li>
          <li><strong>Systems:</strong> Linux, Docker, Kernel Programming</li>
          <li><strong>Tools:</strong> Django, Flask, ReactJS, AWS, Git, Pandas</li>
          <li><strong>Languages Spoken:</strong> Malayalam, Hindi, English, Kannada</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
        <div className="mb-4">
          <h3 className="font-bold">System Engineer @ Twospoon (Nov ’24 - Present)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Developed scalable Flask APIs for ReactJS frontend</li>
            <li>Architected microservices; reduced deployment time by 40%</li>
            <li>Implemented SNMP-based monitoring with 99.9% uptime</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Python Engineer @ Caliper (May ’24 - Nov ’24)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Built REST APIs and Pandas data pipelines processing 1M+ records</li>
            <li>Optimized backend, improved response time by 60%</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside text-sm">
          <li><a href="https://github.com/Adarsh-Liju/project-turtle" className="underline">Project Turtle</a> - Shell tool installer with cross-distro support</li>
          <li><a href="https://github.com/Adarsh-Liju/yamc" className="underline">YAMC</a> - CLI Markdown to HTML converter with themes</li>
          <li><a href="https://github.com/Adarsh-Liju/doctorpres" className="underline">DoctorPres</a> - Streamlit + MySQL prescription manager</li>
          <li><a href="https://github.com/Adarsh-Liju/enigmacipher" className="underline">EnigmaCipher</a> - Secure cryptographic system inspired by Enigma</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Publications</h2>
        <ul className="list-disc list-inside text-sm">
          <li>SDN Alarm Systems - IEEE NKCON 2023</li>
          <li>ONOS SDN Architectures - Springer SmartCom 2024</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Certifications & Achievements</h2>
        <ul className="list-disc list-inside text-sm">
          <li> Good Human Certified Nice</li>
        </ul>
      </section>
    </main>
  );
}
