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
        contentType: 'image',
        content: 'https://slidemodel.com/wp-content/uploads/2024/02/Learning-Objectives-Examples-788x444.png'
      },
      {
        lesson: 'Lesson 2',
        title: 'Learning Style Assessment',
        description: 'VARK Questionnaire results screenshot',
        type: 'screenshot',
        evidence: 'VARK learning style results will be displayed here',
        icon: Camera,
        contentType: 'image',
        content: 'https://vark-learn.com/wp-content/uploads/2014/08/VARK-Results-Graph.png'
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
        contentType: 'image',
        content: 'https://www.template.net/wp-content/uploads/2020/07/Weekly-Schedule-Example.jpg'
      },
      {
        lesson: 'Lesson 2',
        title: 'AI Tools Usage',
        description: 'Screenshot of AI tools used in daily life',
        type: 'screenshot',
        evidence: 'AI tools and applications used will be documented here',
        icon: Camera,
        contentType: 'image',
        content: 'https://blog.hootsuite.com/wp-content/uploads/2023/03/chatgpt-screenshot.png'
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
        contentType: 'image',
        content: 'https://pressbooks.bccampus.ca/studystrategizesucceed/wp-content/uploads/sites/349/2021/03/SQ3R-Template.png'
      },
      {
        lesson: 'Lesson 2',
        title: 'Bias Detector Poster',
        description: 'Poster showing 3 signs of bias and 2 avoidance tips',
        type: 'poster',
        evidence: 'Bias detection poster with key indicators will be displayed',
        icon: Image,
        contentType: 'image',
        content: 'https://www.allsides.com/sites/default/files/styles/large/public/allsides-bias-chart-v10-trans-optimized.png'
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
        contentType: 'image',
        content: 'https://learn.microsoft.com/en-us/windows/ai/media/notes-sample-app-summary.png'
      },
      {
        lesson: 'Lesson 2',
        title: 'Mind Mapping Activity',
        description: 'Create a mind map showing benefits of lists OR memory techniques',
        type: 'mindmap',
        evidence: 'Mind map visualizing learning techniques will be uploaded',
        icon: Map,
        contentType: 'image',
        content: 'https://www.meistertask.com/wp-content/uploads/2019/09/mind-map-examples-for-students-1.jpg'
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
        contentType: 'text',
        content: 'This course has helped me understand my learning style better. I now use time blocking and the SQ3R method, which has made my study sessions more focused and effective.'
      },
      {
        lesson: 'Lesson 2',
        title: 'Study Plan',
        description: 'Microsoft To-Do list screenshot',
        type: 'screenshot',
        evidence: 'Weekly study plan and task organization will be shown',
        icon: Camera,
        contentType: 'image',
        content: 'https://assets.onestore.ms/cdnmedia/screenshots/to-do/en-us/to-do_pc_02_1024x768.png'
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
        contentType: 'text',
        content: 'I learned that AI can have bias based on its training data. It\'s important to use AI as a tool for help, not to copy its work directly. I also need to be careful not to share private information with AI tools.'
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
        icon: Image,
        contentType: 'image',
        content: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        lesson: 'Lesson 2',
        title: 'Goal Setting Framework',
        description: 'SMART framework OR WOOP framework activity',
        type: 'framework',
        evidence: 'Goal setting framework application will be demonstrated',
        icon: Target,
        contentType: 'text',
        content: 'Specific: Improve my grade in Math. Measurable: Achieve at least 85% on the next exam. Achievable: I will study for 1 hour daily. Relevant: This is crucial for my degree. Time-bound: The exam is in 4 weeks.'
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
        contentType: 'image',
        content: 'https://clockify.me/blog/wp-content/uploads/2024/06/time-blocking-template-1.png'
      },
      {
        lesson: 'Lesson 2',
        title: 'Digital Integrity',
        description: 'Create a Digital Integrity poster',
        type: 'poster',
        evidence: 'Digital integrity principles poster will be presented here',
        icon: Image,
        contentType: 'image',
        content: 'https://img.freepik.com/free-vector/cyber-security-poster-template_1284-34347.jpg'
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
                          {task.type === 'none' ? (
                            <p className="text-gray-500 text-sm">No upload required for this task</p>
                          ) : task.contentType === 'image' ? (
                            <img 
                              src={task.content} 
                              alt={task.title} 
                              className="w-full max-h-64 object-cover rounded mx-auto" 
                              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                            />
                          ) : (
                            <div className="text-gray-300 text-sm p-4 bg-gray-700 rounded">
                              <p>{task.content}</p>
                            </div>
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