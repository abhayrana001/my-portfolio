import { Code } from "lucide-react"
import { 
  SiAngular,
  SiBootstrap,
  SiCss3, SiGit, SiHtml5, SiJavascript, 
  SiNextdotjs, 
  SiReact, SiRedux, SiTailwindcss 
} from "react-icons/si"

const skills = [
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },       // Orange-Red
  { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },         // Blue
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> }, // Yellow
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },   // Purple
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }, // Cyan
  { name: 'Angular', icon: <SiAngular color="#DD0031" /> },   // Red
  { name: 'React.js', icon: <SiReact color="#61DAFB" /> },    // Light Blue
  { name: 'Redux', icon: <SiRedux color="#764ABC" /> },       // Purple
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> }, // Black
  { name: 'Git', icon: <SiGit color="#F05032" /> },           // Orange
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <Code className="inline-block mr-3 text-purple-600" size={40} />
          Skills & <span className="text-purple-600">Abilities</span>
        </h2>

        {/* Skills Grid */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((s, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col items-center justify-center hover:shadow-md transition"
              >
                <div className="text-4xl mb-4 text-gray-800">{s.icon}</div>
                <p className="text-gray-700 font-medium text-lg">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
