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
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Learning Style Assessment',
        description: 'VARK Questionnaire results screenshot',
        type: 'screenshot', 
        evidence: 'VARK learning style results will be displayed here',
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=center'
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
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'AI Tools Usage',
        description: 'Screenshot of AI tools used in daily life',
        type: 'screenshot',
        evidence: 'AI tools and applications used will be documented here',
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center'
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
        icon: FileText,
        imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Bias Detector Poster',
        description: 'Poster showing 3 signs of bias and 2 avoidance tips',
        type: 'poster',
        evidence: 'Bias detection poster with key indicators will be displayed',
        icon: Image,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center'
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
        icon: Activity,
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Mind Mapping Activity',
        description: 'Create a mind map showing benefits of lists OR memory techniques',
        type: 'mindmap',
        evidence: 'Mind map visualizing learning techniques will be uploaded',
        icon: Map,
        imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417dad?w=500&h=300&fit=crop&crop=center'
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
        icon: Brain,
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Study Plan',
        description: 'Microsoft To-Do list screenshot',
        type: 'screenshot',
        evidence: 'Weekly study plan and task organization will be shown',
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop&crop=center'
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
        icon: FileText,
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'No Task - Assessment 1',
        description: 'No additional task required this lesson',
        type: 'none',
        evidence: 'No evidence required for this lesson',
        icon: Target,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center'
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
        icon: Image,
        imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Goal Setting Framework',
        description: 'SMART framework OR WOOP framework activity',
        type: 'framework',
        evidence: 'Goal setting framework application will be demonstrated',
        icon: Target,
        imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop&crop=center'
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
        icon: Clock,
        imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Digital Integrity',
        description: 'Create a Digital Integrity poster',
        type: 'poster',
        evidence: 'Digital integrity principles poster will be presented here',
        icon: Image,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center'
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
                        
                        <div className="bg-gray-600 border-2 border-dashed border-gray-500 rounded p-2 text-center overflow-hidden">
                          {task.type === 'none' ? (
                            <div className="p-6">
                              <div className="text-gray-400 mb-2">No upload required for this task</div>
                              <p className="text-gray-500 text-sm">Assessment week - focus on your main assignment</p>
                            </div>
                          ) : (
                            <>
                              <img 
                                src={task.imageUrl} 
                                alt={task.title}
                                className="w-full h-48 object-cover rounded mb-2"
                              />
                              <div className="text-gray-400 text-sm p-2">
                                Sample image - Replace with your actual work
                              </div>
                            </>
                          )}
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