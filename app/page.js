import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { User, Calendar, BookOpen, Award, Video, Mail } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  {
    title: 'About Me',
    description: 'Learn about my goals, interests, and purpose',
    href: '/about',
    icon: User
  },
  {
    title: 'Weekly Tasks',
    description: 'All completed assignments from Weeks 1-8',
    href: '/weekly-tasks',
    icon: Calendar
  },
  {
    title: 'Learning Techniques',
    description: 'My C.R.E.A.M. strategy implementation',
    href: '/learning-techniques',
    icon: BookOpen
  },
  {
    title: 'Achievements',
    description: 'Certificates and accomplishments',
    href: '/achievements',
    icon: Award
  },
  {
    title: 'Conclusion',
    description: 'Course reflection video',
    href: '/conclusion',
    icon: Video
  },
  {
    title: 'Contact',
    description: 'Get in touch with me',
    href: '/contact',
    icon: Mail
  }
];

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Sarah Al Mansoori - Learning Portfolio</h1>
            <p className="text-xl mb-8 opacity-90">
              LSS 1003 - Life and Future Skills | Fall 2025
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/aiimage.webp"
                  alt="Future IT Specialist"
                  width={192} // 48 * 4
                  height={192}
                  className="object-cover"
                />
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-white">Student Info</h3>
                  <p className="text-white"><strong>Name:</strong> Sarah Al Mansoori</p>
                  <p className="text-white"><strong>HCT ID:</strong> H00345678</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-white">Course Info</h3>
                  <p className="text-white"><strong>Course:</strong> LSS 1003</p>
                  <p className="text-white"><strong>CRN:</strong> 23456</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">Portfolio Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="card hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center group"
                >
                  <div className="text-white mb-4 group-hover:scale-110 transition duration-200">
                    <item.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Academic Integrity Statement
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In accordance with the HCT Academic Integrity Policy, students are required
                  to refrain from all forms of academic integrity breaches as defined and explained by HCT.
                </p>
                <p>
                  A student found guilty of having committed acts of academic integrity breach(es)
                  will be subject to the relevant sanctions as outlined by HCT.
                </p>
                <div className="border-t border-gray-600 pt-4 arabic-text text-white">
                  <p className="font-semibold mb-2">إفادة النزاهة الأكاديمية</p>
                  <p>وفقًا لسياسة كليات التقنية العليا للنزاهة الأكاديمية</p>
                  <p>• على الطلبة الإلتزام بلوائح وقواعد النزاهة الأكاديمية، كما هو مبيّن وموضح في السياسات والإجراءات الخاصة بكليات التقنية العليا.</p>
                  <p>• في حالة ارتكاب الطالب أي شكل من أشكال الإخلال بالنزاهة الأكاديمية، سيتعرض الى العقوبات الموضحة في السياسات ذات الصلة.</p>
                </div>
                <p className="italic border-t border-gray-600 pt-4 text-gray-300">
                  This assignment is entirely my own work except where I have duly acknowledged
                  other sources in the text and listed those sources at the end of the assignment.
                  I have not previously submitted this work to the HCT, or any other entity.
                  I understand that I may be orally examined on my submission.
                </p>
                <div className="border-t border-gray-600 pt-4 text-white">
                  <p><strong>Student Signature:</strong> _________________________</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}