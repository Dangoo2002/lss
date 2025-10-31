import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Target } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-12">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-4">Who I Am</h2>
              <div className="space-y-4 text-gray-300">
                <p>I am Sarah Al Mansoori, a dedicated Information Technology student at Higher Colleges of Technology. I am passionate about cybersecurity and software development.</p>
                <p>I enjoy solving complex problems, learning new programming languages, and staying updated with the latest technology trends. I believe in continuous learning and self-improvement.</p>
                <p>I recognize the importance of developing both technical and soft skills to succeed in the rapidly evolving IT industry.</p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-4">Portfolio Purpose</h2>
              <p className="text-gray-300">
                This e-portfolio documents my learning journey in LSS 1003 - Life and Future Skills. 
                It showcases my growth, the skills I have developed, and my ability to apply effective 
                learning strategies in both academic and professional contexts.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Target className="h-6 w-6 mr-2 text-white" />
              My Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Complete Bachelor's in Information Technology with honors",
                "Obtain cybersecurity certifications (CEH, Security+)",
                "Develop proficiency in Python and JavaScript",
                "Improve project management and teamwork skills",
                "Participate in cybersecurity competitions",
                "Secure an internship in IT security"
              ].map((goal, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-6">My Interests</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Cybersecurity",
                "Software Development",
                "Network Administration",
                "Digital Forensics",
                "Cloud Computing",
                "Artificial Intelligence",
                "Data Analysis",
                "Mobile App Development"
              ].map((interest, index) => (
                <span 
                  key={index}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}