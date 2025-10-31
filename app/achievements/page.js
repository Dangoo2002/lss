import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, CheckCircle, Star } from 'lucide-react';

export default function Achievements() {
  const certificates = [
    {
      title: 'Learning Study Skills',
      platform: 'LinkedIn Learning',
      description: 'Comprehensive course on effective study techniques and learning strategies',
      status: 'Completed - October 2025',
      link: '#'
    },
    {
      title: 'Time Management Fundamentals',
      platform: 'LinkedIn Learning',
      description: 'Essential skills for prioritizing tasks and managing academic workload effectively',
      status: 'Completed - October 2025',
      link: '#'
    }
  ];

  const awards = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high performance in coursework',
      status: 'Ongoing'
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
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{cert.platform}</p>
                    </div>
                    <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Complete
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  
                  <div className="text-sm text-gray-400 mb-4">
                    <strong>Status:</strong> {cert.status}
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center bg-gray-700">
                    <div className="text-gray-400 mb-2">Certificate Image</div>
                    <div className="text-gray-500 text-sm">
                      PDF certificate will be displayed here
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-hct-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                    <Award className="h-4 w-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="card text-center group hover:shadow-lg transition duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-200">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{award.description}</p>
                  <span className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="h-3 w-3 mr-1" />
                    {award.status}
                  </span>
                </div>
              ))}
              
              <div className="card text-center border-2 border-dashed border-gray-600 bg-gray-700">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">
                  Future Achievement
                </h3>
                <p className="text-gray-500 text-sm">
                  More accomplishments to come!
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Skills Development Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: 'Time Management', progress: 85 },
                { skill: 'Study Techniques', progress: 80 },
                { skill: 'Digital Literacy', progress: 90 },
                { skill: 'Critical Thinking', progress: 75 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{item.skill}</span>
                    <span className="text-blue-400 font-semibold">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
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