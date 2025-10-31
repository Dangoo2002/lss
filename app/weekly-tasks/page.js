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
        icon: Camera
      },
      {
        lesson: 'Lesson 2',
        title: 'Learning Style Assessment',
        description: 'VARK Questionnaire results screenshot',
        type: 'screenshot',
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
        icon: Camera
      },
      {
        lesson: 'Lesson 2',
        title: 'AI Tools Usage',
        description: 'Screenshot of AI tools used in daily life',
        type: 'screenshot',
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
        icon: FileText
      },
      {
        lesson: 'Lesson 2',
        title: 'Bias Detector Poster',
        description: 'Poster showing 3 signs of bias and 2 avoidance tips',
        type: 'poster',
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
        icon: Activity
      },
      {
        lesson: 'Lesson 2',
        title: 'Mind Mapping',
        description: 'Mind maps for lists benefits and memory techniques',
        type: 'mindmap',
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
        icon: Brain
      },
      {
        lesson: 'Lesson 2',
        title: 'Study Plan',
        description: 'Microsoft To-Do list screenshot',
        type: 'screenshot',
        icon: Camera
      }
    ]
  },
  {
    week: 6,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'AI Ethics',
        description: '3 sentences about AI critical usage',
        type: 'writing',
        icon: FileText
      },
      {
        lesson: 'Lesson 2',
        title: 'No Task',
        description: 'Assessment 1 - No additional task',
        type: 'none',
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
        description: 'Photo of study space with description',
        type: 'photo',
        icon: Image
      },
      {
        lesson: 'Lesson 2',
        title: 'Goal Setting',
        description: 'SMART or WOOP framework activity',
        type: 'framework',
        icon: Target
      }
    ]
  },
  {
    week: 8,
    tasks: [
      {
        lesson: 'Lesson 1',
        title: 'Time Management',
        description: 'Time blocking schedule or Kanban board',
        type: 'schedule',
        icon: Clock
      },
      {
        lesson: 'Lesson 2',
        title: 'Digital Integrity',
        description: 'Poster about academic integrity',
        type: 'poster',
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
                      
                      <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="text-gray-400 text-sm mb-2">Evidence Placeholder</div>
                        <div className="bg-gray-600 border-2 border-dashed border-gray-500 rounded p-8 text-center">
                          <span className="text-gray-400">
                            {task.type === 'screenshot' && 'Screenshot will be uploaded'}
                            {task.type === 'screenshots' && 'Screenshots will be uploaded'}
                            {task.type === 'worksheet' && 'Worksheet PDF/Image'}
                            {task.type === 'poster' && 'Poster Image'}
                            {task.type === 'activity' && 'Activity Results'}
                            {task.type === 'mindmap' && 'Mind Map Image'}
                            {task.type === 'reflection' && 'Reflection Text'}
                            {task.type === 'writing' && 'Written Content'}
                            {task.type === 'none' && 'No task required'}
                            {task.type === 'photo' && 'Study Space Photo'}
                            {task.type === 'framework' && 'Goal Framework'}
                            {task.type === 'schedule' && 'Schedule Image'}
                          </span>
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