import { User } from "lucide-react"
import mypic from '../assets/mypic.jpg'

const AboutUS = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    <User className="inline-block mr-3 text-purple-600" size={40} />
                    About <span className="text-purple-600">Me</span>
                </h2>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="w-80 h-96 rounded-lg overflow-hidden shadow-xl border-4 border-purple-200">
                            <img src={mypic} alt="Abhay" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold text-gray-800">I'm Abhay</h3>
                        <p className="text-xl text-purple-600 font-semibold">Passionate Front-End Developer</p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I am a dedicated Front-End Developer based in Mohali, India, with a Bachelor's degree in Information Technology from DAVIET Jalandhar.
                            I specialize in building responsive and efficient web applications using modern technologies such as Angular, React and Next.js.
                        </p>

                        <div>
                            <p className="text-gray-700"><span className="text-purple-600 font-semibold">Email:</span> abhayrana0290@gmail.com</p>
                            <p className="text-gray-700"><span className="text-purple-600 font-semibold">Location:</span> Mohali, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUS
