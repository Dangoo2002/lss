
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, FileText, Image, Activity, Map, Brain, Clock, Target } from 'lucide-react';

const weeklyTasks = [
  {
    week: 1,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Course Learning Objectives & Assessment Strategy',
        description: 'Screenshot of Course Nearpod PDF slide 8',
        type: 'screenshot',
        evidence: 'Course objectives and assessment strategy screenshots will be uploaded here',
        icon: Camera
      },
      {
        lesson: 'Lesson 2',
        title: 'Learning Style Assessment',
        description: 'VARK Questionnaire results screenshot',
        type: 'screenshot', 
        evidence: 'VARK learning style results will be displayed here',
        icon: Camera
      }
    ]
  },
  {
    week: 2,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Information Management',
        description: 'Weekly schedule and OneDrive folder organization',
        type: 'screenshots',
        evidence: 'Weekly schedule and organized folders will be shown here',
        icon: Camera
      },
      {
        lesson: 'Lesson 2',
        title: 'AI Tools Usage',
        description: 'Screenshot of AI tools used in daily life',
        type: 'screenshot',
        evidence: 'AI tools and applications used will be documented here',
        icon: Camera
      }
    ]
  },
  {
    week: 3,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'SQ3R Reading Strategy',
        description: 'Completed worksheet screenshot or PDF',
        type: 'worksheet',
        evidence: 'SQ3R reading strategy worksheet completion will be shown',
        icon: FileText
      },
      {
        lesson: 'Lesson 2',
        title: 'Bias Detector Poster',
        description: 'Poster showing 3 signs of bias and 2 avoidance tips',
        type: 'poster',
        evidence: 'Bias detection poster with key indicators will be displayed',
        icon: Image
      }
    ]
  },
  {
    week: 4,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Notetaking with Copilot',
        description: 'Activity using AI for note-taking',
        type: 'activity',
        evidence: 'AI-assisted note-taking examples will be provided here',
        icon: Activity
      },
      {
        lesson: 'Lesson 2',
        title: 'Mind Mapping Activity',
        description: 'Create a mind map showing benefits of lists OR memory techniques',
        type: 'mindmap',
        evidence: 'Mind map visualizing learning techniques will be uploaded',
        icon: Map
      }
    ]
  },
  {
    week: 5,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Reflection Sheet',
        description: '30-50 word reflection on learning',
        type: 'reflection',
        evidence: 'Personal learning reflection will be written here',
        icon: Brain
      },
      {
        lesson: 'Lesson 2',
        title: 'Study Plan',
        description: 'Microsoft To-Do list screenshot',
        type: 'screenshot',
        evidence: 'Weekly study plan and task organization will be shown',
        icon: Camera
      }
    ]
  },
  {
    week: 6,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'AI Ethics Learning',
        description: 'Write 3 sentences about what you learned from AI ethics lesson',
        type: 'writing',
        evidence: 'Key insights about ethical AI usage will be shared here',
        icon: FileText
      },
      {
        lesson: 'Lesson 2',
        title: 'No Task - Assessment 1',
        description: 'No additional task required this lesson',
        type: 'none',
        evidence: 'No evidence required for this lesson',
        icon: Target
      }
    ]
  },
  {
    week: 7,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Study Environment',
        description: 'Photo of favorite study space with description',
        type: 'photo',
        evidence: 'Personal study environment setup will be showcased here',
        icon: Image
      },
      {
        lesson: 'Lesson 2',
        title: 'Goal Setting Framework',
        description: 'SMART framework OR WOOP framework activity',
        type: 'framework',
        evidence: 'Goal setting framework application will be demonstrated',
        icon: Target
      }
    ]
  },
  {
    week: 8,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Time Management Strategy',
        description: 'Time Blocking schedule (6AM-10PM) OR Kanban Board',
        type: 'schedule',
        evidence: 'Time management system implementation will be displayed',
        icon: Clock
      },
      {
        lesson: 'Lesson 2',
        title: 'Digital Integrity',
        description: 'Create a Digital Integrity poster',
        type: 'poster',
        evidence: 'Digital integrity principles poster will be presented here',
        icon: Image
      }
    ]
  }
];

export default function WeeklyTasks() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-4">My Weekly Tasks</h1>
          <p className="text-center text-gray-300 mb-12">Complete collection of work from Weeks 1-8</p>
          
          <div className="space-y-8">
            {weeklyTasks.map((weekData) => (
              <div key={weekData.week} className="card">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-hct-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {weekData.week}
                  </span>
                  Week {weekData.week}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {weekData.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="border border-gray-700 rounded-lg p-6 hover:shadow-md transition duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {task.lesson}
                        </span>
                        <task.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="font-semibold text-lg text-white mb-2">{task.title}</h3>
                      <p className="text-gray-300 mb-4">{task.description}</p>
                      
                      <div className="bg-gray-700 rounded-lg p-4">
                        <div className="text-gray-400 text-sm mb-2">Evidence Description:</div>
                        <p className="text-gray-300 text-sm mb-4">{task.evidence}</p>
                        
                        <div className="bg-gray-600 border-2 border-dashed border-gray-500 rounded p-6 text-center">
                          <div className="text-gray-400 mb-2">Upload Area</div>
                          <p className="text-gray-500 text-sm">
                            {task.type === 'none' 
                              ? 'No upload required for this task' 
                              : 'Screenshot/Photo/Document will be uploaded here'
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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