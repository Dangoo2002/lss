import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Video, Play, CheckCircle } from 'lucide-react';

export default function Conclusion() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Course Reflection
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Final thoughts and learning journey summary
          </p>

          <div className="card mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Video className="h-6 w-6 mr-2 text-white" />
              Reflection Video
            </h2>
            
            <div className="bg-gray-700 rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-12 mb-6 relative">
                  <div className="text-white text-center">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">60-90 Second Reflection Video</h3>
                    <p className="opacity-90">Course learnings and skill applications</p>
                  </div>
                </div>
                
                <div className="text-left space-y-4 text-gray-300">
                  <p><strong>Video Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>60-90 seconds duration</li>
                    <li>Face must be visible throughout</li>
                    <li>Share key learnings from LSS 1003</li>
                    <li>Explain most important skills gained</li>
                    <li>Provide examples of skill applications</li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-900 border border-yellow-700 rounded-lg">
                  <p className="text-yellow-200 text-sm">
                    <strong>Note:</strong> Video will be recorded and uploaded here before submission deadline.
                    My face will be visible to confirm this is my own work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Learnings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Effective time management and organization strategies",
                "Advanced study techniques and learning methodologies",
                "Critical thinking and bias detection skills",
                "Digital literacy and ethical AI usage",
                "Goal setting and personal development planning",
                "Information management and research skills"
              ].map((learning, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{learning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">Skills Application</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Academic Applications:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Using SQ3R reading strategy for textbook comprehension</li>
                  <li>Applying time blocking for efficient study sessions</li>
                  <li>Implementing active recall in exam preparation</li>
                  <li>Using digital tools for organization and productivity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Personal Applications:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Goal setting using SMART framework for personal projects</li>
                  <li>Critical evaluation of online information sources</li>
                  <li>Effective communication and collaboration skills</li>
                  <li>Lifelong learning mindset development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Future Career Applications:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Professional time management and project planning</li>
                  <li>Ethical use of AI tools in workplace scenarios</li>
                  <li>Continuous professional development strategies</li>
                  <li>Effective information synthesis and presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}