// src/components/sections/StatCard.tsx
import React from 'react';

export default function StatCard({ title, value, icon }: { title: string; value: string | number; icon?: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-glass flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#eef6ff] flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-sm text-mutedText">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
    </div>
  );
}
