import { Code } from "lucide-react"
import { 
  SiCss3, SiGit, SiHtml5, SiJavascript, 
  SiMongodb, SiNextdotjs, SiNodedotjs, 
  SiReact, SiRedux, SiTailwindcss 
} from "react-icons/si"

const skills = [
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <SiGit /> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <Code className="inline-block mr-3 text-purple-600" size={40} />
          Skills & <span className="text-purple-600">Abilities</span>
        </h2>

        {/* Skills Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((s, i) => (
              <div 
                key={i} 
                className="bg-gray-100 rounded-xl p-6 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
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
