
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, Zap, Users, Target } from 'lucide-react';

const creamStrategy = [
  {
    aspect: 'Creative',
    description: 'Developing innovative approaches to learning and problem-solving',
    explanation: 'I apply creative thinking to develop unique study methods and learning approaches that make complex concepts easier to understand and remember.',
    examples: [
      'Developing color-coded note-taking systems for different subjects',
      'Creating visual mind maps to connect related concepts',
      'Designing custom study schedules that match my learning rhythm'
    ],
    evidence: [
      'Examples of creative note organization and visual learning aids',
      'Photos of mind maps and innovative study materials',
      'Screenshots of customized digital learning tools'
    ],
    icon: Palette
  },
  {
    aspect: 'Reflective',
    description: 'Thinking critically about learning experiences and outcomes',
    explanation: 'I regularly reflect on my learning progress, analyze what methods work best, and make adjustments to improve my academic performance.',
    examples: [
      'Maintaining a weekly learning journal to track progress',
      'Analyzing exam results to identify areas for improvement',
      'Adjusting study techniques based on reflection and feedback'
    ],
    evidence: [
      'Learning journal entries and progress reflections',
      'Before-and-after analysis of study method effectiveness',
      'Video reflections on learning challenges and solutions'
    ],
    icon: Brain
  },
  {
    aspect: 'Effective',
    description: 'Implementing efficient and productive learning strategies',
    explanation: 'I use proven time management and organization techniques to maximize learning efficiency and achieve consistent academic results.',
    examples: [
      'Implementing time blocking for focused study sessions',
      'Using priority-based task management systems',
      'Applying active recall and spaced repetition techniques'
    ],
    evidence: [
      'Time management schedules and productivity logs',
      'Academic performance tracking and improvement charts',
      'Completed task lists and project milestone achievements'
    ],
    icon: Zap
  },
  {
    aspect: 'Active',
    description: 'Engaging proactively in learning activities and discussions',
    explanation: 'I actively participate in academic discussions, collaborate on group projects, and engage in additional learning opportunities beyond required coursework.',
    examples: [
      'Regular participation in class discussions and activities',
      'Collaborative work on team projects and assignments',
      'Attendance at workshops and academic enrichment sessions'
    ],
    evidence: [
      'Documentation of class participation and contributions',
      'Photos and records of group work sessions',
      'Certificates of workshop attendance and participation'
    ],
    icon: Users
  },
  {
    aspect: 'Motivated',
    description: 'Maintaining drive and purpose in the learning journey',
    explanation: 'I stay motivated by setting clear academic and career goals, tracking my progress, and maintaining focus on long-term objectives.',
    examples: [
      'Setting specific academic and personal development goals',
      'Creating detailed plans for skill acquisition and growth',
      'Maintaining consistent study habits and work ethic'
    ],
    evidence: [
      'Academic and career goal planning documents',
      'Progress tracking systems and achievement records',
      'Daily and weekly task management tools'
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
                    
                    <h3 className="text-lg font-semibold text-white mb-3">Examples from My Learning</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                      {item.examples.map((example, exIndex) => (
                        <li key={exIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Evidence to be Provided</h3>
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
                        Real photos, screenshots, and documents will be uploaded here to demonstrate my {item.aspect.toLowerCase()} learning approach
                      </p>
                      <div className="space-y-3">
                        {item.evidence.map((_, evIndex) => (
                          <div key={evIndex} className="bg-gray-700 rounded p-3 text-gray-400 text-sm">
                            Evidence {evIndex + 1} - To be uploaded
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              My Learning Philosophy
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                I believe that effective learning requires a balanced approach that combines creative thinking with practical strategies. 
                The C.R.E.A.M. framework provides a comprehensive structure for developing lifelong learning skills that extend beyond academic success.
              </p>
              <p>
                By integrating creative approaches, reflective practices, effective systems, active engagement, and strong motivation, 
                I aim to build a sustainable learning practice that supports both my academic goals and personal development.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}