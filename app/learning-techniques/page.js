import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, Zap, Users, Target } from 'lucide-react';

const creamStrategy = [
  {
    aspect: 'Creative',
    description: 'Developing innovative approaches to learning and problem-solving',
    examples: [
      'Using color-coded notes and mind maps for better retention',
      'Creating custom study aids and memory techniques',
      'Designing personalized learning workflows'
    ],
    evidence: 'Photos of colorful notes, mind maps, creative projects',
    icon: Palette
  },
  {
    aspect: 'Reflective',
    description: 'Thinking critically about learning experiences and outcomes',
    examples: [
      'Maintaining a learning journal with weekly reflections',
      'Analyzing what study methods work best for different subjects',
      'Adjusting strategies based on performance feedback'
    ],
    evidence: 'Reflection sheets, learning journals, self-assessment notes',
    icon: Brain
  },
  {
    aspect: 'Effective',
    description: 'Implementing efficient and productive learning strategies',
    examples: [
      'Time blocking and priority-based task management',
      'Active recall and spaced repetition techniques',
      'Strategic break scheduling for optimal focus'
    ],
    evidence: 'Study schedules, productivity logs, achievement records',
    icon: Zap
  },
  {
    aspect: 'Active',
    description: 'Engaging proactively in learning activities and discussions',
    examples: [
      'Participating in class discussions and group activities',
      'Attending workshops and additional learning sessions',
      'Applying learning in practical scenarios'
    ],
    evidence: 'Workshop certificates, group project photos, participation records',
    icon: Users
  },
  {
    aspect: 'Motivated',
    description: 'Maintaining drive and purpose in the learning journey',
    examples: [
      'Setting clear academic and personal goals',
      'Tracking progress toward objectives',
      'Celebrating milestones and achievements'
    ],
    evidence: 'Goal lists, progress trackers, achievement documentation',
    icon: Target
  }
];

export default function LearningTechniques() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Effective Learning Techniques
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Applying the C.R.E.A.M. Strategy to Enhance Learning
          </p>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              C.R.E.A.M. Learning Strategy
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {creamStrategy.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-white">{item.aspect}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 text-lg">
              A comprehensive approach to learning that combines creativity, reflection, 
              effectiveness, active engagement, and motivation for optimal academic success.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              My C.R.E.A.M. Implementation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="border border-gray-600 px-6 py-4 text-left font-semibold text-white">
                      C.R.E.A.M. Aspect
                    </th>
                    <th className="border border-gray-600 px-6 py-4 text-left font-semibold text-white">
                      My Examples
                    </th>
                    <th className="border border-gray-600 px-6 py-4 text-left font-semibold text-white">
                      Evidence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {creamStrategy.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-700">
                      <td className="border border-gray-600 px-6 py-4 align-top">
                        <div className="flex items-center font-semibold text-white text-lg mb-2">
                          <item.icon className="h-5 w-5 mr-2" />
                          {item.aspect}
                        </div>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </td>
                      <td className="border border-gray-600 px-6 py-4 align-top">
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {item.examples.map((example, exIndex) => (
                            <li key={exIndex}>{example}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-gray-600 px-6 py-4 align-top">
                        <div className="bg-gray-700 rounded-lg p-4">
                          <div className="text-gray-300 mb-2">{item.evidence}</div>
                          <div className="bg-gray-600 border-2 border-dashed border-gray-500 rounded p-4 text-center text-gray-400 text-sm">
                            Evidence will be uploaded here
                            <br />
                            (Photos, documents, screenshots)
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              My Learning Philosophy
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                I believe that effective learning is not just about memorizing information, 
                but about developing a systematic approach that combines creativity with 
                practical strategies. The C.R.E.A.M. framework has helped me transform 
                how I approach my studies.
              </p>
              <p>
                By being Creative in my methods, Reflective about my progress, 
                Effective in my time management, Active in my participation, 
                and Motivated in my goals, I have been able to achieve better results 
                while enjoying the learning process.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}