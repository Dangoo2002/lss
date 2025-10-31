import { BookOpen, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">LSS 1003 Portfolio</span>
        </div>
        <p className="text-gray-300 mb-4">
          Life and Future Skills - Higher Colleges of Technology
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            H00538223@hct.ac.ae
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            800 MyHCT (800 69428)
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          © 2025 Mohamed Alzaabi Learning Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}