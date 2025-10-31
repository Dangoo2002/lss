
'use client';

import { useState } from 'react';
import { Menu, X, Home, User, Calendar, BookOpen, Award, Video, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Me', href: '/about', icon: User },
  { name: 'Weekly Tasks', href: '/weekly-tasks', icon: Calendar },
  { name: 'Learning Techniques', href: '/learning-techniques', icon: BookOpen },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Conclusion', href: '/conclusion', icon: Video },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-hct-blue text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 mr-3" />
              <span className="font-bold text-xl">Sarah&apos;s Learning Portfolio</span>
            </div>
            
         
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200 flex items-center"
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

    
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}