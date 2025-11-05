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
        evidence: 'Understanding the course structure and assessment criteria helps me plan my learning journey effectively throughout the semester.',
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'Learning Style Assessment',
        description: 'VARK Questionnaire results screenshot',
        type: 'screenshot', 
        evidence: 'Discovering I have a multimodal learning preference helps me tailor study methods that combine visual, reading, and kinesthetic approaches for better retention.',
        icon: Camera,
        imageUrl: 'https://imgv2-1-f.scribdassets.com/img/document/268685236/original/04226a6951/1?v=1'
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
        evidence: 'Creating organized folders and a weekly schedule has significantly improved my productivity and reduced time spent searching for materials.',
        icon: Camera,
        imageUrl: 'https://www.smartsheet.com/sites/default/files/weekly-assignment-template.jpg'
      },
      {
        lesson: 'Lesson 2',
        title: 'AI Tools Usage',
        description: 'Screenshot of AI tools used in daily life',
        type: 'screenshot',
        evidence: 'Integrating AI tools like ChatGPT and Copilot into my daily routine has enhanced my research efficiency and provided valuable learning assistance.',
        icon: Camera,
        imageUrl: 'https://images.unsplash.com/photo-1675865254433-6ba341f0f00b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpJTIwY2hhdGJvdCUyMGludGVyZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
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
        evidence: 'The SQ3R method transformed my reading comprehension by providing a structured approach to survey, question, read, recite, and review academic materials.',
        icon: FileText,
        imageUrl: 'https://worksheets.clipart-library.com/images2/sq3r-reading-worksheet/sq3r-reading-worksheet-0.png'
      },
      {
        lesson: 'Lesson 2',
        title: 'Bias Detector Poster',
        description: 'Poster showing 3 signs of bias and 2 avoidance tips',
        type: 'poster',
        evidence: 'Creating this poster helped me recognize emotional language, one-sided arguments, and unsupported claims as key bias indicators while learning to verify sources and seek multiple perspectives.',
        icon: Image,
        imageUrl: 'https://klutch.app/wp-content/uploads/2022/08/image3.jpg'
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
        evidence: 'Using Copilot for note-taking improved my ability to organize key points systematically and generate comprehensive summaries from complex information.',
        icon: Activity,
        imageUrl: 'https://support.microsoft.com/images/en-us/76608811-fee3-4d94-8476-fa96d74d5671'
      },
      {
        lesson: 'Lesson 2',
        title: 'Mind Mapping Activity',
        description: 'Create a mind map showing benefits of lists OR memory techniques',
        type: 'mindmap',
        evidence: 'Mind mapping revealed how visual organization enhances memory retention and helps create meaningful connections between different concepts and ideas.',
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
        evidence: 'This course has fundamentally changed my approach to learning. I now understand my preferred learning styles and have implemented effective time management strategies that make studying more focused and productive.',
        icon: Brain,
        imageUrl: null
      },
      {
        lesson: 'Lesson 2',
        title: 'Study Plan',
        description: 'Microsoft To-Do list screenshot',
        type: 'screenshot',
        evidence: 'Implementing a structured study plan using Microsoft To-Do has helped me prioritize tasks, meet deadlines consistently, and maintain better balance between academic and personal commitments.',
        icon: Camera,
        imageUrl: 'https://www.microsoft.com/en-us/garage/wp-content/uploads/2017/05/Student_Planner_1-1.png'
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
        evidence: 'I learned that AI systems can inherit biases from training data, making critical evaluation essential. Responsible AI usage requires understanding privacy implications and using these tools as assistants rather than replacements for original thinking.',
        icon: FileText,
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center'
      },
      {
        lesson: 'Lesson 2',
        title: 'No Task - Assessment 1',
        description: 'No additional task required this lesson',
        type: 'none',
        evidence: 'This week focused on completing Assessment 1, allowing dedicated time for comprehensive review and submission of major coursework requirements.',
        icon: Target,
        imageUrl: null
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
        evidence: 'My organized study space with minimal distractions and good lighting creates an optimal learning environment. I prefer starting with a clean desk and all necessary materials within reach.',
        icon: Image,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxFSrcxfGu4_jGveruQgThcS1jr1HZbshbA&s'
      },
      {
        lesson: 'Lesson 2',
        title: 'Goal Setting Framework',
        description: 'SMART framework OR WOOP framework activity',
        type: 'framework',
        evidence: 'Applying the SMART framework helped me set specific, measurable goals for improving my grades and developing professional skills with clear timelines and actionable steps.',
        icon: Target,
        imageUrl: 'https://www.risely.me/wp-content/uploads/2023/08/ezgif.com-gif-maker-26-1024x576.webp'
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
        evidence: 'Time blocking transformed my daily productivity by allocating specific periods for focused study, breaks, and personal activities, reducing procrastination and ensuring balanced time allocation.',
        icon: Clock,
        imageUrl: 'https://images.highfile.com/wp-content/uploads/2024/12/Weekly-Time-Blocking-Schedule-Template-Google-Docs-Word.png?strip=all&lossy=1&quality=90&webp=90&sharp=1&ssl=1'
      },
      {
        lesson: 'Lesson 2',
        title: 'Digital Integrity',
        description: 'Create a Digital Integrity poster',
        type: 'poster',
        evidence: 'Designing this poster reinforced the importance of academic honesty, proper citation practices, and ethical use of digital resources in maintaining educational integrity.',
        icon: Image,
        imageUrl: 'https://static.wixstatic.com/media/0315c4_f4baeecb6e8249d7881b86ffefe280c9~mv2.png/v1/fill/w_360,h_494,al_c,q_85,enc_auto/0315c4_f4baeecb6e8249d7881b86ffefe280c9~mv2.png'
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
                          ) : task.type === 'reflection' ? (
                            <div className="p-6">
                              <div className="text-white text-lg mb-3">📝 Personal Reflection</div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {task.evidence}
                              </p>
                            </div>
                          ) : (
                            <img 
                              src={task.imageUrl} 
                              alt={task.title}
                              className="w-full h-48 object-cover rounded mb-2"
                            />
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