import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    <Send className="inline-block mr-3 text-purple-600" size={40} />
                    Get <span className="text-purple-600">in Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left - Contact Info */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            I’m always open to discuss new opportunities, collaborations, or just a friendly chat.
                            Feel free to reach out via email, phone, or LinkedIn.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="text-purple-600" />
                                <a href="mailto:abhayrana0290@gmail.com" className="text-gray-700 hover:text-purple-600">
                                    abhayrana0290@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-purple-600" />
                                <a href="tel:+919781345290" className="text-gray-700 hover:text-purple-600">
                                    +91 97813 45290
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-purple-600" />
                                <span className="text-gray-700">Mohali, Punjab, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <form action="https://formspree.io/f/xvgwknpe" 
                    method="POST" 
                    className="bg-purple rounded-xl shadow-lg p-8 space-y-6 border border-gray-100">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none" />
                        
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                        className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none" />
                        
                        <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows={5} 
                        required 
                        className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none">
                        </textarea>
                        
                        <button type="submit" className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all shadow-md">
                            Send Message
                        </button>
                    </form>


                </div>
            </div>
        </section>
    )
}

export default Contact
