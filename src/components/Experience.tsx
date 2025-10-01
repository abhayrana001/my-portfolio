import { Briefcase } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <Briefcase className="inline-block mr-3 text-purple-600" size={40} />
          My <span className="text-purple-600">Experience</span>
        </h2>

        <div className="space-y-8">

          {/* Stackgeeks */}
          <div className="bg-purple-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-6 flex flex-col text-center md:text-left">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                React.js Developer
              </h3>
              <p className="text-gray-600 mb-2 font-medium">
                Stackgeeks Pvt. Ltd. | Chandigarh, India
              </p>
              <p className="text-green-600 font-semibold text-lg mb-4">
                Jan 2025 – Jun 2025
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Developed dynamic and responsive UIs using React.js, Redux, and modern JavaScript.</li>
                <li>Collaborated with backend teams to integrate REST APIs for seamless user experiences.</li>
                <li>Built admin panels for managing users, roles, and application data.</li>
              </ul>
            </div>
          </div>

          {/* Solitaire Infosys */}
          <div className="bg-purple-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-6 flex flex-col text-center md:text-left">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                Junior Software Developer Intern
              </h3>
              <p className="text-gray-600 mb-2 font-medium">
                Solitaire Infosys Pvt. Ltd. | Mohali, India
              </p>
              <p className="text-green-600 font-semibold text-lg mb-4">
                Jan 2024 – Jul 2024
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Contributed to the development of School Diary 24 ERP System (academic & admin modules).</li>
                <li>Designed and implemented student & teacher management modules using the MERN stack.</li>
                <li>Assisted in testing, debugging, and improving overall application reliability.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
