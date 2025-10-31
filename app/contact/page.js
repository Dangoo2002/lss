import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Contact Me
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Get in touch for any inquiries
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">H00538223@hct.ac.ae</p>
                    <p className="text-gray-500 text-sm">HCT official email address</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">800 MyHCT (800 69428)</p>
                    <p className="text-gray-500 text-sm">HCT main contact number</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Institution</h3>
                    <p className="text-gray-300">Higher Colleges of Technology</p>
                    <p className="text-gray-500 text-sm">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-white mb-3">Student Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Full Name:</span>
                    <span className="font-medium text-white">Mohamed Alzaabi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">HCT ID:</span>
                    <span className="font-medium text-white">H00538223</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Course:</span>
                    <span className="font-medium text-white">LSS 1003</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CRN:</span>
                    <span className="font-medium text-white">13643</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="projectTitle" className="block text-sm font-medium text-white mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter project title"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-white mb-2">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your student ID"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    HCT Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your HCT email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-hct-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}