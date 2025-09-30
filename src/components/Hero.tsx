import { ChevronDown, Github, Linkedin } from "lucide-react"
import avatar from '../assets/Avatar.jpg'
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 bg-gradient-to-r from-purple-100 to-pink-50">
            <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Hi There,<br />I'm Abhay <span className="text-purple-600">Rana</span>
                    </h1>
                    <p className="text-xl text-gray-700 font-medium">
                        Frontend Developer | Web Technologies Enthusiast
                    </p>

                    {/* CTA Button with theme color */}
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                    >
                        About Me
                        <ChevronDown className="w-5 h-5" />
                    </button>

                    {/* Social Links */}
                    <div className="flex gap-4 pt-8">
                        <a href="https://github.com/abhayrana001" target="_blank" rel="noreferrer"
                            className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhay-rana-ar02/" target="_blank" rel="noreferrer"
                            className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="w-72 h-72 mb-4 md:w-90 md:h-90 rounded-full overflow-hidden shadow-2xl border-8 border-purple-400">
                        <img src={avatar} alt="Abhay" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
