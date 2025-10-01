import { GraduationCap } from "lucide-react"
import college from '../assets/daviet.jpg'
import school from '../assets/ssdps.jpg'
const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-r from-pink-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <GraduationCap className="inline-block mr-3 text-purple-600" size={40} />
          My <span className="text-purple-600">Education</span>
        </h2>

        <div className="space-y-8">
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={college} alt="DAVIET" className="w-full h-48 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-semibold text-purple-600 mb-2">Bachelor of Engineering in Information Technology</h3>
                <p className="text-gray-600 mb-2">DAV Institute Of Engineering And Technology Jalandhar</p>
                <p className="text-green-600 font-semibold text-lg">2020-2024 | Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={school} alt="School" className="w-full h-48 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-semibold text-purple-600 mb-2">Senior Secondary Education</h3>
                <p className="text-gray-600 mb-2">St. Soldier Divine Public School Jalandhar | CBSE</p>
                <p className="text-green-600 font-semibold text-lg">2018-2020 | Completed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
