import React from 'react';
import { LucideIcon } from 'lucide-react';

// 1. Define the "Props" (The settings for this component)
interface FeatureCardProps {
  title: string;
  icon: LucideIcon; // This says "Expect a Lucide Icon here"
  children: React.ReactNode; // This says "Expect any HTML inside"
}

// 2. The Component Function
export function FeatureCard({ title, icon: Icon, children }: FeatureCardProps) {
  return (
    <div className="group relative p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
      
      {/* Icon Area */}
      <div className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>

      {/* Title Prop */}
      <h3 className="text-xl font-bold text-white mb-2">
        {title}
      </h3>

      {/* Children (The content inside) */}
      <div className="text-gray-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}