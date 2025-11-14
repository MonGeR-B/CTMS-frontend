// src/components/layout/AppShell.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ScrollVelocity from '../ui/ScrollVelocity';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen relative">
      <ScrollVelocity 
        texts={['TREBOUND', 'TRAVEL', 'EXPLORE', 'JOURNEY', 'ADVENTURE', 'DISCOVER', 'WANDERLUST']} 
        velocity={30}
        className="select-none"
        damping={20}
        stiffness={200}
        numCopies={6}
      />
      <Sidebar />
      <div className="flex-1 min-h-screen relative z-10">
        <Header />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
