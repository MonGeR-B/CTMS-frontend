// src/components/layout/AppShell.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ScrollVelocity from '../ui/ScrollVelocity';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="lg:flex min-h-screen relative">
      <ScrollVelocity 
        texts={['TREBOUND', 'TRAVEL', 'EXPLORE', 'JOURNEY', 'ADVENTURE', 'DISCOVER', 'WANDERLUST']} 
        velocity={30}
        className="select-none"
        damping={20}
        stiffness={200}
        numCopies={6}
      />
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        onMobileClose={() => setIsMobileSidebarOpen(false)} 
      />
      <div className="w-full lg:flex-1 min-h-screen relative z-10">
        <Header onMobileMenuToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} />
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
