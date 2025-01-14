import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function MenuSection({ title, icon: Icon, children }: MenuSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold text-orange-900">{title}</h2>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {children}
      </div>
    </section>
  );
}