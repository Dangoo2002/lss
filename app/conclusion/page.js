
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, CheckCircle, Star, Download, Target } from 'lucide-react';

export default function Achievements() {
  const certificates = [
    {
      title: 'Learning Study Skills',
      platform: 'LinkedIn Learning',
      description: 'This course covers effective study techniques, note-taking strategies, and learning methodologies to enhance academic performance.',
      status: 'In Progress - To be completed',
      completionDate: 'Will be completed before submission',
      skills: ['Study Techniques', 'Note-taking', 'Time Management', 'Learning Strategies'],
      icon: '📚'
    },
    {
      title: 'Time Management Fundamentals',
      platform: 'LinkedIn Learning', 
      description: 'Essential skills for prioritizing tasks, managing academic workload, and creating effective study schedules for better productivity.',
      status: 'In Progress - To be completed',
      completionDate: 'Will be completed before submission',
      skills: ['Task Prioritization', 'Schedule Planning', 'Productivity Systems', 'Goal Setting'],
      icon: '⏰'
    }
  ];

  const upcomingGoals = [
    {
      title: 'Complete LinkedIn Certifications',
      description: 'Finish both required LinkedIn Learning courses and obtain certificates',
      deadline: 'Before November 7, 2025',
      status: 'In Progress'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintain strong academic performance throughout the semester',
      deadline: 'Ongoing',
      status: 'Active'
    },
    {
      title: 'Skill Development',
      description: 'Continue developing IT and soft skills through coursework and practice',
      deadline: 'Continuous',
      status: 'Active'
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Certificates & Achievements
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Documenting my learning journey and accomplishments
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              LinkedIn Learning Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="card group hover:shadow-xl transition duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{cert.icon}</span>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition duration-200">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{cert.platform}</p>
                    </div>
                    <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      In Progress
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-4">
                    <div><strong>Status:</strong> {cert.status}</div>
                    <div><strong>Completion:</strong> {cert.completionDate}</div>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center bg-gray-700 mb-4">
                    <div className="text-gray-400 mb-2">Certificate Preview</div>
                    <div className="text-gray-500 text-sm">
                      LinkedIn Learning certificate will be displayed here upon completion
                    </div>
                  </div>
                  
                  <button className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition duration-200 flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Certificate Pending Completion
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Academic Goals & Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingGoals.map((goal, index) => (
                <div key={index} className="card text-center group hover:shadow-lg transition duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-200">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{goal.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="text-gray-300">{goal.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="text-blue-400 font-medium">{goal.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Skills Development Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: 'Time Management', progress: 80, description: 'Developing effective scheduling and prioritization' },
                { skill: 'Study Techniques', progress: 75, description: 'Learning and applying various study methods' },
                { skill: 'Digital Literacy', progress: 85, description: 'Improving technology and software skills' },
                { skill: 'Critical Thinking', progress: 70, description: 'Enhancing analysis and problem-solving abilities' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{item.skill}</span>
                    <span className="text-blue-400 font-semibold">{item.progress}%</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}