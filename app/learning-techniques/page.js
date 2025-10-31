import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, Zap, Users, Target } from 'lucide-react';

const creamStrategy = [
  {
    aspect: 'Creative',
    description: 'Developing innovative approaches to learning and problem-solving',
    explanation: 'I apply creativity in my studies by developing unique study methods and presentation approaches that make learning more engaging and effective.',
    examples: [
      'Created color-coded digital notes for complex IT subjects',
      'Designed interactive mind maps for project planning',
      'Developed custom study schedules using digital tools'
    ],
    evidence: [
      'Screenshots of my digital notes and color-coding system',
      'Photos of mind maps and creative project plans',
      'Instructor feedback on innovative presentation approaches'
    ],
    icon: Palette
  },
  {
    aspect: 'Reflective',
    description: 'Thinking critically about learning experiences and outcomes',
    explanation: 'I maintain a reflection journal to analyze my learning progress, identify challenges, and implement improvements based on my experiences.',
    examples: [
      'Weekly reflection entries analyzing study session effectiveness',
      'Adjusting study methods based on exam performance analysis',
      'Identifying time management challenges and implementing solutions'
    ],
    evidence: [
      'Photos of reflection journal pages',
      'Short video discussing learning experiences and improvements',
      'Before-and-after analysis of study method changes'
    ],
    icon: Brain
  },
  {
    aspect: 'Effective',
    description: 'Implementing efficient and productive learning strategies',
    explanation: 'I use systematic organization and time management techniques to achieve clear academic results and complete tasks efficiently.',
    examples: [
      'Time blocking schedule for daily study sessions',
      'Priority-based task management system',
      'Progress tracking for long-term projects'
    ],
    evidence: [
      'Grade improvement charts and academic progress reports',
      'Completed task lists and project milestones',
      'Time management schedules and productivity logs'
    ],
    icon: Zap
  },
  {
    aspect: 'Active',
    description: 'Engaging proactively in learning activities and discussions',
    explanation: 'I actively participate in class discussions, group projects, and workshops to enhance my learning through collaboration and practical application.',
    examples: [
      'Regular participation in class discussions and Q&A sessions',
      'Collaborative work on group projects and team assignments',
      'Attendance and engagement in workshops and extra learning sessions'
    ],
    evidence: [
      'Screenshots of discussion forum participation',
      'Photos from group work sessions and workshops',
      'Attendance records and engagement metrics'
    ],
    icon: Users
  },
  {
    aspect: 'Motivated',
    description: 'Maintaining drive and purpose in the learning journey',
    explanation: 'I stay motivated by setting clear academic and career goals, tracking my progress, and maintaining a strong sense of purpose in my studies.',
    examples: [
      'Setting semester goals and tracking weekly progress',
      'Career planning and skill development roadmaps',
      'Daily task planning and priority setting'
    ],
    evidence: [
      'Academic goal planner and progress trackers',
      'Career development calendar and skill acquisition plans',
      'Daily task lists and priority management systems'
    ],
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

          <div className="space-y-8">
            {creamStrategy.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <item.icon className="h-8 w-8 text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">{item.aspect}</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explanation</h3>
                    <p className="text-gray-300 mb-6">{item.explanation}</p>
                    
                    <h3 className="text-lg font-semibold text-white mb-3">Real-Life Examples</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                      {item.examples.map((example, exIndex) => (
                        <li key={exIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Required Evidence</h3>
                    <div className="bg-gray-700 rounded-lg p-4 mb-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {item.evidence.map((evidence, evIndex) => (
                          <li key={evIndex}>{evidence}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                      <h4 className="text-white font-semibold mb-3">Evidence Upload Area</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Upload photos, screenshots, or documents that demonstrate your {item.aspect.toLowerCase()} approach
                      </p>
                      <div className="space-y-3">
                        {item.evidence.map((_, evIndex) => (
                          <div key={evIndex} className="bg-gray-700 rounded p-3 text-gray-400 text-sm">
                            Evidence {evIndex + 1} will be uploaded here
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}